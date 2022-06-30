const express = require('express')
const path = require('path')

// const fruitRoutes = require('./routes/fruits')
const itemsRoutes = require('./routes/items')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/', itemsRoutes)

module.exports = server
