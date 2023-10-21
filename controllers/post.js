const Post = require('../models/Post')
const User = require('../models/User')
const Comments = require('../models/Comments')

const bcrypt = require('bcrypt')

const moment = require('moment')

//////-----Create  new post

const CreatePost = async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, image: req.file.path })
    res.send(post)
  } catch (error) {
    throw error
  }
}

//show all Posts
const ShowPosts = async (req, res) => {
  try {
    const post = await Post.find({})
    res.send(post)
  } catch (error) {
    throw error
  }
}

//---show user posts

const ShowUserPosts = (req, res) => {
  Post.find({ userId: req.query.userId })
    .populate({ path: 'comments', populate: { path: 'createdUser' } })
    .then((user) => {
      res.send(user)
    })
    .catch((err) => {
      console.log(err)
    })
}
//---delete post
const DeletePosts = async (req, res) => {
  let post = await Post.findById(req.query.id)
  let commentsArray = post.comments
  await Post.findByIdAndDelete(req.query.id)
  for (let i = 0; i < commentsArray.length; i++) {
    await Comments.findByIdAndDelete(commentsArray[i])
  }
  res.send({
    msg: 'Post Deleted',
    payload: req.params.post_id,
    status: 'Ok'
  })
}

module.exports = {
  CreatePost,
  ShowPosts,
  ShowUserPosts,
  DeletePosts
}
