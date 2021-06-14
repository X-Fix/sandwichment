const {
  createUser,
  authUser,
  deleteUser,
  addSandwich,
} = require('../models/user');

module.exports.addUser = function (
  { body: { username, password, role } },
  res
) {
  if (!username || !password) {
    res.sendStatus(400);
    return;
  }

  createUser(username, password, role).then(() => {
    res.end();
  });
};

module.exports.authUser = function ({ body: { username, password } }, res) {
  authUser(username, password)
    .then(({ _id }) => {
      res.send({ id: _id });
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.removeUser = function ({ body: { id } }, res) {
  deleteUser(id).then(() => {
    res.end();
  });
};
