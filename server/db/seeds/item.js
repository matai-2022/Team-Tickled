exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('items')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          id: 1,
          datalist: 'beers',
          item: 'lager',
          des: 'average beer',
          counter: 0,
        },
        {
          id: 2,
          datalist: 'beers',
          item: 'ale',
          des: 'average ale',
          counter: 0,
        },
        {
          id: 3,
          datalist: 'beers',
          item: 'stout',
          des: 'average stout',
          counter: 0,
        },
      ])
    })
}

// table.increments('id')
// table.string('datalist')
// table.string('item')
// table.string('des')
// table.integer('counter')
