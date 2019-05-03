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

async function getDish(id) {
  const dish = await db('dishes')
    .where({id})
    .first();
  const recipes = await db('recipes')
    .where({ dish_id: id });
  return {
    ...dish,
    recipes
  }
}

function getRecipes() {
  return db('recipes as r')
    .select('r.id', 'r.name', 'r.dish_id', 'd.name as dish', 'r.instructions')
    .leftJoin('dishes as d', 'r.dish_id', 'd.id');
}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe, 'id');
}
