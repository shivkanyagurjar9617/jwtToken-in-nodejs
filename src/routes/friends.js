const express = require('express')
const { friendController } = require('../controller/friendController')
const { frdMiddileware } = require('../middlewares/frdMiddil')
const friendRoute = express.Router()



friendRoute.post('/friend/create',frdMiddileware,friendController)

module.exports = {friendRoute}