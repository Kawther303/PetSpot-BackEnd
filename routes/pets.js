const router = require('express').Router()

const controller = require('../controllers/pets')

const middleware = require('../middleware')
//import multer
const multer = require('multer')

var storage = multer.diskStorage({
  destination: './public/pictures/pets',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname)
  }
})
var upload = multer({
  storage: storage
})

router.get('/', controller.GetPet)
router.post('/', upload.single('image'), controller.CreatePet)

router.put('/:pet_id', controller.UpdatePet)

router.delete('/:pet_id', controller.DeletePet)

module.exports = router
