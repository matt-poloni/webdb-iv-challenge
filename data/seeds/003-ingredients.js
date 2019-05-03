
exports.seed = function(knex, Promise) {
  return knex('ingredients')
    .truncate()
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, name: 'Ground Beef'},
        {id: 2, name: 'Cheese'},
        {id: 3, name: 'Sandwich Buns'},
        {id: 4, name: 'Pizza Dough'},
        {id: 5, name: 'Pizza Sauce'},
        {id: 6, name: 'Pepperoni'},
        {id: 7, name: 'Taco Shells'},
        {id: 8, name: 'Shredded Lettuce'},
        {id: 9, name: 'Diced Tomatoes'},
        {id: 10, name: 'Sour Cream'}
      ]);
    });
};
