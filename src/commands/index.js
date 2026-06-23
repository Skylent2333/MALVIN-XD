const fs = require('fs');
const path = require('path');

function loadCommands() {
  const commands = [];
  const dir = path.join(__dirname);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'index.js');
  for (const file of files) {
    try {
      const cmd = require(path.join(dir, file));
      if (cmd && cmd.name) commands.push(cmd);
    } catch (e) {
      // ignore load error
    }
  }
  return commands;
}

module.exports = { loadCommands };
