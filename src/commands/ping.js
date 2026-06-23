module.exports = {
  name: 'ping',
  description: 'Responds with pong and latency.',
  ownerOnly: false,
  execute: async ({ send, args }) => {
    await send('Pong!');
  }
};
