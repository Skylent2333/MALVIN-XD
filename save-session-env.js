const fs = require('fs');
const path = require('path');

const session = process.argv[2];
const owner = process.argv[3];
if (!session) {
  console.error('Usage: node save-session-env.js "<SESSION_ID>" [OWNER_NUMBER]');
  process.exit(1);
}

const envPath = path.join(__dirname, '.env');
let env = '';
if (fs.existsSync(envPath)) env = fs.readFileSync(envPath, 'utf8');

function setKey(content, key, value) {
  const re = new RegExp(`^${key}=.*$`, 'm');
  if (re.test(content)) return content.replace(re, `${key}=${value}`);
  return content + (content && !content.endsWith('\n') ? '\n' : '') + `${key}=${value}\n`;
}

env = setKey(env, 'SESSION_ID', session);
if (owner) env = setKey(env, 'OWNER_NUMBER', owner);

fs.writeFileSync(envPath, env, 'utf8');
console.log('.env updated with SESSION_ID' + (owner ? ' and OWNER_NUMBER' : ''));
