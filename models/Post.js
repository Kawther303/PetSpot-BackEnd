//import mongoose
const mongoose = require('mongoose')
// user schema
const PostSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: {
      type: String,
      required: true
    },
    image: String,

    desc: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: false
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
      }
    ]
  },
  { timestamps: true }
)

//export schema

const Post = mongoose.model('Post', PostSchema)

module.exports = Post
