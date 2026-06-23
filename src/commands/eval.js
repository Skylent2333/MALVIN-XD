module.exports = {
  name: 'eval',
  description: 'Evaluate JS (owner-only).',
  ownerOnly: true,
  execute: async ({ send, args }) => {
    const code = args.join(' ');
    if (!code) return send('Usage: eval <js>');
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      await send('Result: ' + String(result));
    } catch (e) {
      await send('Error: ' + e.message);
    }
  }
};
