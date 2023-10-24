const express = require('express')
const router = express.Router()

const Post = require('../models/Post')
const User = require('../models/User')
////////////////

router.use(express.urlencoded({ extended: true }))

const multer = require('multer')

const storage = multer.diskStorage({
  destination: './public/pictures/post',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage: storage })

const controller = require('../controllers/post')

router.get('/', controller.ShowPosts)

router.post('/add-post', upload.single('image'), controller.CreatePost)

router.get('/show-posts', controller.ShowUserPosts)

router.get('/post/delete', controller.DeletePosts)

module.exports = router
