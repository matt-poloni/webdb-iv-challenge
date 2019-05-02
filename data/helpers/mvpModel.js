const db = require('../dbConfig');

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe,
}

function getDishes() {
  db('dishes');
}

function addDish(dish) {
  db('dishes').insert(dish, 'id');
}

function getDish(id) {
  db('dishes').where({id}).first();
}

function getRecipes() {
  db('recipes');
}

function addRecipe(recipe) {
  db('recipes').insert(recipe, 'id');
}
