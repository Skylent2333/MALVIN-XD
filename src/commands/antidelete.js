let enabled = false;
module.exports = {
  name: 'antidelete',
  description: 'Toggle anti-delete feature (placeholder).',
  ownerOnly: true,
  execute: async ({ send, args }) => {
    if (args[0] === 'on') { enabled = true; return send('Anti-delete enabled'); }
    if (args[0] === 'off') { enabled = false; return send('Anti-delete disabled'); }
    return send('Usage: antidelete <on|off>');
  }
};
