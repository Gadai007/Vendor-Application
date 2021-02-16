const route = require('express').Router()
const { getAllUpdate, createUpdate  } = require('../controllers/update')

route.get('/update', getAllUpdate)
route.post('/create/update', createUpdate)

module.exports = route