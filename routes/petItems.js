const router = require('express').Router()
const controller = require('../controllers/petItems')
const middleware = require('../middleware')
//import multer
const multer = require('multer')

var storage = multer.diskStorage({
  destination: './public/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '_' + file.originalname)
  }
})

var upload = multer({
  storage: storage
})

router.get('/', controller.GetPetItem)
router.post('/', upload.single('image'), controller.CreatePetItem)

router.put('/:petItem_id', controller.UpdatePetItem)

router.delete('/:petItem_id', controller.DeletePetItem)

module.exports = router
