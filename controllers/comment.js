const Comments = require('../models/Comments')
const User = require('../models/User')
const Post = require('../models/Post')
// const bcrypt = require('bcrypt')

const moment = require('moment')

//Create Comments
const CreateComment = async (req, res) => {
  try {
    const comment = await Comments.create({
      ...req.body,
      createdUser: req.body.createdUser,
      postId: req.body.postId
    })

    res.send(comment)
  } catch (error) {
    throw error
  }
}

//update Comment
const CommentUpdate = (req, res) => {
  Comments.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
      res.send({
        msg: 'Comment Updated',
        payload: req.params.comment_id,
        status: 'Ok'
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

//delete comment

const DeleteComment = async (req, res) => {
  let comment = await Comments.findById(req.query.id)
  let post = await Post.findById(comment.postId)
  let commentArray = post.comments

  await Comments.findByIdAndDelete(req.query.id)
  let commentIndex = post.comments.indexOf(req.query.id)
  post.comments.splice(commentIndex, 1)
  await post.save()

  res.send({
    msg: 'Comment Deleted',
    payload: req.query.id,
    status: 'Ok'
  })
}

module.exports = {
  CreateComment,
  CommentUpdate,
  DeleteComment
}
