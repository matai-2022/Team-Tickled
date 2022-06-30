exports.up = function (knex) {
  return knex.schema.createTable('items', (table) => {
    table.increments('id')
    table.string('datalist')
    table.string('item')
    table.string('des')
    table.integer('counter')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('items')
}
