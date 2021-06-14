const bcrypt = require('bcryptjs');
const { model } = require('mongoose');
const UserSchema = require('../schemas/user');

const User = model('User', UserSchema);

module.exports.createUser = function (username, password, role) {
  const user = await User.create({
    username,
    passwordHash: 'coming soon',
    role: role === 'admin' ? role : 'user',
  });

  const passwordHash = bcrypt.hashSync(password, user._id);

  return User.updateOne({ _id: user._id }, { passwordHash });
};

module.exports.authUser = function (username, password) {
  return User.findOne({ username })
    .select('passwordHash')
    .then((user) => {
      if (!user || !bcrypt.compare(password, user.passwordHash)) {
        throw 'User not found';
      }

      return user;
    });
};

module.exports.deleteUser = function (_id) {
  return User.deleteOne({ _id });
};

module.exports.appendSandwich = function (userId, sandwichId) {
  return User.updateOne({ _id: userId }, { $push: { sandwiches: sandwichId } });
};
