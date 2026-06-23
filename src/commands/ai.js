module.exports = {
  name: 'ai',
  description: 'Simple AI reply (placeholder).',
  ownerOnly: false,
  execute: async ({ send, args }) => {
    const prompt = args.join(' ') || 'Hello';
    await send(`AI placeholder response to: ${prompt}`);
  }
};
