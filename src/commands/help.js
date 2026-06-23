module.exports = {
  name: 'help',
  description: 'Lists available commands.',
  ownerOnly: false,
  execute: async ({ send, commands }) => {
    const lines = ['Available commands:'];
    for (const cmd of commands) lines.push(`- ${cmd.name}: ${cmd.description}`);
    await send(lines.join('\n'));
  }
};
