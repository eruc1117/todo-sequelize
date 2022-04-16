const express = require('express')
const router = express.Router()
const { authenticator } = require('../middleware/auth')

const users = require('./models/users')
const index = require('./models/index')
const todos = require('./models/todo')
const auth = require('./models/auth')

router.use('/users', users)
router.use('/auth', auth)
router.use('/todos', authenticator, todos)
router.use('/', authenticator, index)

module.exports = router