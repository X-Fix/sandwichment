const { Schema } = require('mongoose');

const VegetableSchema = new Schema({
  name: String,
  isAvailable: Boolean,
});

module.exports = VegetableSchema;
