const { Schema } = require('mongoose');

const SandwichSchema = new Schema({
  _id: Schema.Types.ObjectId,
  meal: {
    type: Schema.Types.ObjectId,
    ref: 'Meal',
  },
  bread: String,
  size: String,
  baked: Boolean,
  taste: String,
  extras: [String],
  vegetables: [String],
  sauce: String,
});

module.exports = SandwichSchema;
