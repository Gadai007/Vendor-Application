const route = require('express').Router()
const { getAllCareer, createCareer  } = require('../controllers/career')

route.get('/career', getAllCareer)
route.post('/create/career', createCareer)

module.exports = route