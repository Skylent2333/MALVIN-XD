module.exports = {
  name: 'groupinfo',
  description: 'Shows group information (placeholder).',
  ownerOnly: false,
  execute: async ({ send }) => {
    await send('Group info: (demo)');
  }
};
