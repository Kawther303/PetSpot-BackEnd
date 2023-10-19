const router = require("express").Router()
const controller = require("../controllers/auth")
const middleware = require("../middleware/index.js")
const multer = require("multer")

//multer
const storage = multer.diskStorage({
  destination: "public/pictures/profilePic",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
})
const upload = multer({ storage: storage })

router.post("/login", controller.Login)

router.post("/register", upload.single("profilePicture"), controller.Register)

router.put(
  "/updateprofile/:user_id",
  upload.single("profilePicture"),
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateProfile
)
router.put(
  "/update/:user_id",
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = router
