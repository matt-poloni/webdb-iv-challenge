const db = require('../dbConfig');

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
}

function getDishes() {
  return db('dishes');
}

function addDish(dish) {
  return db('dishes')
    .insert(dish, 'id');
}

function getDish(id) {
  return db('dishes as d')
    .where({id})
    .first();
}

function getRecipes() {
  return db('recipes');
}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe, 'id');
}
