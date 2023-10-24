const router = require('express').Router()
const controller = require('../controllers/auth')
const middleware = require('../middleware/index.js')
const multer = require('multer')
const cartCrtl = require('../controllers/carts')
const path = require('path')
const express = require('express')
//multer
const storage = multer.diskStorage({
  destination: 'public/pictures/profilePic',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})
const upload = multer({ storage: storage })

router.post("/signin", controller.SignIn)



router.post('/register', upload.single('profilePicture'), controller.Register)

// router.get(
//   "/editProfile/:user_id",
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.UpdateProfile
// )
router.put(
  "/editProfile/:user_id",
  upload.single("profilePicture"),
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateProfile
)
router.get(
  "/show/:user_id",
  upload.single("profilePicture"),
  middleware.stripToken,
  middleware.verifyToken,
  controller.ShowProfile
)
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
