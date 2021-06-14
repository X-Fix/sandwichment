const { model } = require('mongoos');
const MealSchema = require('../schemas/meal');

const Meal = model('Meal', MealSchema);

module.exports.findAllMeals = function () {
  return Meal.find();
};

module.exports.findMealsByUser = function (userId) {
  return Meal.find({
    consumers: userId,
  });
};

module.exports.addMeal = function (meal) {
  return Meal.create(meal);
};

module.exports.deleteMeal = function (_id) {
  return Meal.deleteOne({ id });
};

module.exports.setMealState = function (_id, isOpen) {
  return Meal.updatedOne({ _id }, { isOpen });
};
