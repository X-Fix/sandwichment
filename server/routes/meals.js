const {
  addMeal,
  deleteMeal,
  setMealState,
  findAllMeals,
  findMealsByUser,
} = require('../models/meal');

module.exports.getAllMeals = function (req, res) {
  findAllMeals().then((meals) => {
    res.send(meals);
  });
};

module.exports.getUserMeals = function ({ params: { id: userId } }, res) {
  findMealsByUser(userId).then((meals) => {
    res.send(meals);
  });
};

module.exports.addMeal = function ({ body: meal }, res) {
  addMeal(meal).then(() => {
    res.end();
  });
};

module.exports.removeMeal = function ({ params: { id } }, res) {
  deleteMeal(id).then(() => {
    res.end();
  });
};

module.exports.setMealState = function ({ body: { id, isOpen } }) {
  setMealState(id, isOpen).then(() => {
    res.end();
  });
};
