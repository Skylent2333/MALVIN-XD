module.exports = {
  name: 'restart',
  description: 'Restart the bot (owner-only placeholder).',
  ownerOnly: true,
  execute: async ({ send }) => {
    await send('Restarting (demo). Please restart process externally.');
  }
};
