module.exports = {
  name: 'savesession',
  description: 'Displays or saves session info (placeholder).',
  ownerOnly: true,
  execute: async ({ send }) => {
    await send('Session is saved in .env (use save-session-env script).');
  }
};
