module.exports = {
  name: 'status',
  description: 'Sends bot status.',
  ownerOnly: false,
  execute: async ({ send }) => {
    const uptime = process.uptime();
    await send(`Zora AI status: online\nUptime: ${Math.floor(uptime)}s`);
  }
};
