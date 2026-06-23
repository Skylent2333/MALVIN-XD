let enabled = false;
module.exports = {
  name: 'chatbot',
  description: 'Toggle chatbot mode (placeholder).',
  ownerOnly: true,
  execute: async ({ send, args }) => {
    if (args[0] === 'on') { enabled = true; return send('Chatbot enabled'); }
    if (args[0] === 'off') { enabled = false; return send('Chatbot disabled'); }
    return send('Usage: chatbot <on|off>');
  }
};
