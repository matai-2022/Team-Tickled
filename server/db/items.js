const connection = require('./connection')

function getItems(db = connection) {
  return db('items').select()
}

function addItem(entry, db = connection) {
  const { item, des } = entry
  return db('items').insert({ item, des })
}

module.exports = {
  getItems,
  addItem,
}
