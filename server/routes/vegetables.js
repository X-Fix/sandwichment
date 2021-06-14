const { findAvailableVegetables } = require('../models/vegetable');

module.exports.getVegetables = function (req, res) {
  findAvailableVegetables()
    .then((vegetables) => vegetables.map((item) => item.name))
    .then((vegetables) => res.json(vegetables))
    .catch((err) => res.status(500).send(err));
};
