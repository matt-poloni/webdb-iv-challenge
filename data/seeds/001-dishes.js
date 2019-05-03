
exports.seed = function(knex, Promise) {
  return knex('dishes')
    .truncate()
    .then(function () {
      return knex('dishes').insert([
        {id: 1, name: 'Pizza'},
        {id: 2, name: 'Taco'},
        {id: 3, name: 'Burger'}
      ]);
    });
};
