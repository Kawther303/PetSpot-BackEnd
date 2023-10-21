const router = require('express').Router()
const controller = require('../controllers/Auth')
const middleware = require('../middleware')
const cartCrtl = require('../controllers/carts')

router.post('/login', controller.Login)
router.post('/register', controller.Register)
router.put(
  '/update/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = router
