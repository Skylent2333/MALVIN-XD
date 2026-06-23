module.exports = {
  name: 'callreject',
  description: 'Toggle call rejecter (placeholder).',
  ownerOnly: true,
  execute: async ({ send, args }) => {
    await send('Call rejecter toggled (demo).');
  }
};
