module.exports = {
  name: 'tts',
  description: 'Text-to-speech (placeholder).',
  ownerOnly: false,
  execute: async ({ send, args }) => {
    if (!args.length) return send('Usage: tts <text>');
    await send('TTS (demo): ' + args.join(' '));
  }
};
