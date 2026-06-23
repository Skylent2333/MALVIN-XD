module.exports = {
  name: 'sticker',
  description: 'Create sticker from media (placeholder).',
  ownerOnly: false,
  execute: async ({ send }) => {
    await send('Sticker created (demo).');
  }
};
