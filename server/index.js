const express = require('express');
const connectDB = require('./database/index');
const {
  addMeal,
  removeMeal,
  setMealState,
  getAllMeals,
  getUserMeals,
} = require('./routes/meals');
const { addSandwhich, updateSandwich } = require('./routes/sandwiches');
const { addUser, authUser, removeUser } = require('./routes/users');
const { getVegetables } = require('./routes/vegetables');

const app = express();
app.use(express.json());

app.get('/vegetables', getVegetables);

app.post('/user', addUser);
app.post('/login', authUser);
app.delete('/user', removeUser);

app.get('/meals', getAllMeals);
app.get('/meals/user/:id', getUserMeals);
app.post('/meal', addMeal);
app.delete('/meal/:id', removeMeal);
app.patch('/meal', setMealState);

app.post('/sandwich', addSandwhich);
app.patch('/sandwich', updateSandwich);

connectDB();

module.exports = app;
