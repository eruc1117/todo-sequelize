const express = require('express')
const router = express.Router()
const { authenticator } = require('../middleware/auth')

const users = require('./models/users')
const index = require('./models/index')
const todos = require('./models/todo')

router.use('/users', users)
router.use('/todos', authenticator, todos)
router.use('/', authenticator, index)

module.exports = router