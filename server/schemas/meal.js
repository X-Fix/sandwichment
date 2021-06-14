const { Schema } = require('mongoose');

const MealSchema = new Schema({
  _id: Schema.Types.ObjectId,
  date: {
    type: Date,
    required: true,
  },
  isOpen: {
    type: Boolean,
    default: false,
    required: true,
  },
  consumers: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

module.exports = MealSchema;
