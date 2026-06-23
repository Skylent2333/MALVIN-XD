const ownerUtil = require('../utils/owner');

module.exports = {
  name: 'owner',
  description: 'Shows owner info. Owner-only commands show who is owner.',
  ownerOnly: false,
  execute: async ({ send }) => {
    const owners = ownerUtil.getOwners();
    await send('Owners: ' + owners.join(', '));
  }
};
