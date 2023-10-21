const router = require('express').Router()
const controller = require('../controllers/orders')
const middleware = require('../middleware')

router.get('/:userId', controller.GetUserOrders)

router.post('/newOrder', controller.CreateOrder)

module.exports = router
