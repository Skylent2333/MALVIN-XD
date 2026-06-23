module.exports = {
  name: 'download',
  description: 'Placeholder: pretend to download a resource (demo).',
  ownerOnly: false,
  execute: async ({ send, args }) => {
    if (!args[0]) return send('Usage: download <url>');
    await send(`Started download for ${args[0]} (demo)`);
  }
};
