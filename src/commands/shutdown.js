module.exports = {
  name: 'shutdown',
  description: 'Shutdown the bot (owner-only placeholder).',
  ownerOnly: true,
  execute: async ({ send }) => {
    await send('Shutdown requested (demo). Please stop process externally.');
  }
};
