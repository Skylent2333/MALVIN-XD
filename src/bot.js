try {
  require('dotenv').config();
} catch (e) {
  // dotenv may not be installed in this environment; ignore and continue
}
const ownerUtil = require('./utils/owner');
const { loadCommands } = require('./commands');

const BOT_NAME = 'Zora AI';

async function cliMode() {
  console.log('Running in CLI mode (no WhatsApp). Type command names.');
  const readline = require('readline');
  const commands = loadCommands();
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  rl.setPrompt('> ');
  rl.prompt();
  rl.on('line', async (line) => {
    const parts = line.trim().split(/\s+/);
    const name = parts[0];
    const args = parts.slice(1);
    const cmd = commands.find(c => c.name === name);
    if (!cmd) return console.log('Unknown command. Type help');
    try {
      await cmd.execute({ send: async (t) => console.log(t), args, commands });
    } catch (e) {
      console.error('Command error', e);
    }
    rl.prompt();
  });
}

async function start() {
  const commands = loadCommands();
  console.log('Loaded commands:', commands.map(c => c.name).join(', '));
  // Try to initialize Baileys (WhatsApp). If not installed, fall back to CLI.
  try {
    const baileys = require('@whiskeysockets/baileys');
    const qrcode = require('qrcode-terminal');
    const { makeWASocket, useSingleFileAuthState, fetchLatestBaileysVersion } = baileys;
    const auth = useSingleFileAuthState('./auth_info.json');
    const state = auth.state || (auth[0] && auth[0].state) || auth;
    const saveCreds = auth.saveCreds || auth.saveState || auth[1] || (auth[0] && auth[0].saveCreds);

    console.log(`${BOT_NAME} starting with WhatsApp support...`);
    const { version } = await fetchLatestBaileysVersion();
    const sock = makeWASocket({ auth: state, version });

    sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect, qr } = update;
      if (qr) {
        console.log('\n== Bitte mit WhatsApp auf deinem Telefon scannen ==');
        qrcode.generate(qr, { small: false });
      }
      if (connection === 'close') console.log('Connection closed', lastDisconnect && lastDisconnect.error);
      if (connection === 'open') console.log('WhatsApp connected');
    });

    if (saveCreds) sock.ev.on('creds.update', saveCreds);

    sock.ev.on('messages.upsert', async (m) => {
      try {
        const messages = m.messages || [];
        const msg = messages[0];
        if (!msg || (msg.key && msg.key.remoteJid === 'status@broadcast')) return;
        const text = msg.message?.conversation || msg.message?.extendedTextMessage?.text || '';
        if (!text) return;
        const prefix = '!';
        if (!text.startsWith(prefix)) return;
        const parts = text.slice(prefix.length).trim().split(/\s+/);
        const name = parts[0];
        const args = parts.slice(1);
        const cmd = commands.find(c => c.name === name);
        if (!cmd) return;
        const sender = msg.key.participant || msg.key.remoteJid;
        const senderNum = String(sender).split('@')[0];
        if (cmd.ownerOnly && !ownerUtil.isOwner(senderNum)) {
          await sock.sendMessage(msg.key.remoteJid, { text: 'Owner-only command.' }, { quoted: msg });
          return;
        }
        await cmd.execute({
          send: async (txt) => sock.sendMessage(msg.key.remoteJid, { text: txt }, { quoted: msg }),
          args,
          commands
        });
      } catch (err) {
        console.error('Message handler error', err);
      }
    });
  } catch (e) {
    console.log('WhatsApp integration not available:', e && e.message ? e.message : e);
    await cliMode();
  }
}

start();
