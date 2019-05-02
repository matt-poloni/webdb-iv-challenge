
exports.seed = function(knex, Promise) {
  return knex('recipes')
    .truncate()
    .then(function () {
      return knex('recipes').insert([
        {
          id: 1,
          name: 'Cheeseburger',
          dish_id: '3',
          instructions: '(1) Form patties, (2) Cook patties, (3) Place patties on bun w/ toppings'
        },
        {
          id: 2,
          name: 'Pepperoni Pizza',
          dish_id: '1',
          instructions: '(1) Pound dough, (2) Spin dough in air, (3) Place sauce, cheese, & toppings, (4) Cook pizza'
        },
        {
          id: 3,
          name: 'Beef Taco',
          dish_id: '2',
          instructions: '(1) Season beef, (2) Cook beef, (3) Place beef in shell w/ toppings'
        }
      ]);
    });
};
