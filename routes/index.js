const express = require('express')
const router = express.Router()

const users = require('./models/users')
const index = require('./models/index')

router.use('/users', users)
router.use('/', index)

module.exports = router