const route = require('express').Router()
const { getAllUnblock, createUnblock  } = require('../controllers/unblock')

route.get('/unblock', getAllUnblock)
route.post('/create/unblock', createUnblock)

module.exports = route