const { model } = require('mongoose');
const VegetableSchema = require('../schemas/vegetable');

const Vegetable = model('Vegetable', VegetableSchema);

module.exports.findAvailableVegetables = function () {
  return Vegetable.find({ isAvailable: true }).select('name -_id');
};
