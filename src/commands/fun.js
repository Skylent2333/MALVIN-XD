module.exports = {
  name: 'joke',
  description: 'Tells a simple joke.',
  ownerOnly: false,
  execute: async ({ send }) => {
    await send('Why do programmers prefer dark mode? Because light attracts bugs. 🐛');
  }
};
