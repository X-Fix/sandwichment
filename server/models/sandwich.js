const { model } = require('mongoos');
const SandwichSchema = require('../schemas/sandwich');

const Sandwich = model('Sandwich', SandwichSchema);

module.exports.addSandwich = function (sandwich) {
  return Sandwich.create(sandwich);
};

module.exports.updateSandwich = function (_id, sandwich) {
  return Sandwich.updateOne({ _id }, sandwich);
};
