const { addSandwich, updateSandwich } = require('../models/sandwich');
const { appendSandwich } = require('../models/user');

module.exports.addSandwhich = function ({ body: { userId, sandwich } }, res) {
  addSandwich(sandwich).then(({ _id: sandwichId }) => {
    appendSandwich(userId, sandwichId).then(() => {
      res.end();
    });
  });
};

module.exports.updateSandwich = function ({ body: { id, sandwich } }, res) {
  updateSandwich(id, sandwich).then(() => {
    res.end();
  });
};
