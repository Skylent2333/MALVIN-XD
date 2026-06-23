module.exports = {
  name: 'statusreply',
  description: 'Reply to status updates (placeholder).',
  ownerOnly: false,
  execute: async ({ send }) => {
    await send('Status reply configured (demo).');
  }
};
