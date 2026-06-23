module.exports = {
  name: 'viewonce',
  description: 'Handle view-once media (placeholder).',
  ownerOnly: false,
  execute: async ({ send }) => {
    await send('Viewonce handling (demo).');
  }
};
