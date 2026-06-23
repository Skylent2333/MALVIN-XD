const setting = require('../../setting');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

function getOwners() {
  const owners = [];
  if (setting.OWNERS && Array.isArray(setting.OWNERS)) owners.push(...setting.OWNERS.map(String));
  if (process.env.OWNER_NUMBER) owners.push(String(process.env.OWNER_NUMBER));
  if (setting.OWNER_NUMBER) owners.push(String(setting.OWNER_NUMBER));
  return [...new Set(owners)];
}

function isOwner(number) {
  if (!number) return false;
  const owners = getOwners();
  return owners.includes(String(number).replace(/^\+/, '')) || owners.includes(String(number));
}

module.exports = { getOwners, isOwner };
