const { Schema } = require('mongoose');

const UserSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    enum: ['admin', 'consumer'],
    required: true,
  },
  sandwiches: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Sandwich',
    },
  ],
});

module.exports = UserSchema;
