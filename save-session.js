const fs = require('fs');
const path = require('path');

const session = process.argv[2];
if (!session) {
  console.error('Usage: node save-session.js "<SESSION_ID>"');
  process.exit(1);
}

const settingsPath = path.join(__dirname, 'setting.js');
let content = fs.readFileSync(settingsPath, 'utf8');

// Replace SESSION_ID: '' or existing value
const newContent = content.replace(/SESSION_ID:\s*'[^']*'/, `SESSION_ID: '${session}'`);

if (newContent === content) {
  console.error('Could not find SESSION_ID in setting.js');
  process.exit(1);
}

fs.writeFileSync(settingsPath, newContent, 'utf8');
console.log('SESSION_ID saved to setting.js');
