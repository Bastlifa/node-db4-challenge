const express = require('express')

const recipiesRouter = require('./recipies/recipiesRouter')

const server = express()

server.use(express.json())

server.use('/api/recipies', recipiesRouter)

module.exports = server