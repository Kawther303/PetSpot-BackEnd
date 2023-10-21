const router = require('express').Router()
const controller = require('../controllers/carts')
const middleware = require('../middleware')

router.get('/', controller.GetCart)

router.get('/:userId', controller.GetUserCart)

router.put('/addItem/:userId/:itemId', controller.AddItem)

router.put('/addPet/:userId/:petId', controller.AddPet)

router.get('/delItem/:userId/:ItemId', controller.DeleteItem)

router.get('/delPet/:userId/:petId', controller.DeletePet)

router.get('/clear/:userId', controller.ClearCart)

module.exports = router
