//import mongoose
const mongoose = require('mongoose')
// create schema
const commentSchema = new mongoose.Schema(
  {
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
    createdUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comment: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

//export schema

const Comments = mongoose.model('Comments', commentSchema)

module.exports = Comments