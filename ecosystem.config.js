module.exports = {
  apps: [
    {
      name: 'zora-ai',
      script: 'src/bot.js',
      interpreter_args: '-r dotenv/config',
      watch: false,
    }
  ]
};
