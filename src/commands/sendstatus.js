module.exports = {
  name: 'sendstatus',
  description: 'Send status to chat (placeholder).',
  ownerOnly: false,
  execute: async ({ send }) => {
    await send('Status sent (demo).');
  }
};
