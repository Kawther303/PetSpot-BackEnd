const express = require('express')

const router = express.Router()

router.use(express.urlencoded({ extended: true }))

// const jwtSecret = process.env.JWT_SECRET
const controller = require('../controllers/comment')
//create
router.post('/add-comment', controller.CreateComment)
//update
router.put('/post/commentUpdate', controller.CommentUpdate)

//delete
router.get('/profile/commentDelete', controller.DeleteComment)

//
module.exports = router
