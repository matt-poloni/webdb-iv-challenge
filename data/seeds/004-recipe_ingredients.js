
exports.seed = function(knex, Promise) {
  return knex('recipe_ingredients')
    .truncate()
    .then(function () {
      return knex('recipe_ingredients').insert([
        {
          id: 1,
          recipe_id: 1,
          ingredient_id: 1,
          quantity: 0.25,
          unit: 'pounds'
        },
        {
          id: 2,
          recipe_id: 1,
          ingredient_id: 2,
          quantity: 1,
          unit: 'slice'
        },
        {
          id: 3,
          recipe_id: 1,
          ingredient_id: 3,
          quantity: 1,
          unit: 'bun'
        },
        {
          id: 4,
          recipe_id: 2,
          ingredient_id: 4,
          quantity: 10,
          unit: 'inches (diameter)'
        },
        {
          id: 5,
          recipe_id: 2,
          ingredient_id: 5,
          quantity: 3,
          unit: 'ounces'
        },
        {
          id: 6,
          recipe_id: 2,
          ingredient_id: 2,
          quantity: 5,
          unit: 'ounces'
        },
        {
          id: 7,
          recipe_id: 2,
          ingredient_id: 6,
          quantity: 12,
          unit: 'one inch slices'
        },
        {
          id: 8,
          recipe_id: 3,
          ingredient_id: 7,
          quantity: 1,
          unit: 'shell'
        },
        {
          id: 9,
          recipe_id: 3,
          ingredient_id: 1,
          quantity: 3,
          unit: 'ounces'
        },
        {
          id: 10,
          recipe_id: 3,
          ingredient_id: 8,
          quantity: 2,
          unit: 'ounces'
        },
        {
          id: 11,
          recipe_id: 3,
          ingredient_id: 9,
          quantity: 1,
          unit: 'teaspoon'
        },
        {
          id: 12,
          recipe_id: 3,
          ingredient_id: 10,
          quantity: 1,
          unit: 'teaspoon'
        }
      ]);
    });
};
