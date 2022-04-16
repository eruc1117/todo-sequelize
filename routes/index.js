const express = require('express')
const router = express.Router()

const users = require('./models/users')
const index = require('./models/index')
const todos = require('./models/todo')

router.use('/users', users)
router.use('/todos', todos)
router.use('/', index)

module.exports = router