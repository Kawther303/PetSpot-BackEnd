const router = require('express').Router()

const controller = require('../controllers/pets')

const middleware = require('../middleware')

router.get('/', controller.GetPet)
router.post('/', controller.CreatePet)

router.put('/:pet_id', controller.UpdatePet)

router.delete('/:pet_id', controller.DeletePet)

module.exports = router
