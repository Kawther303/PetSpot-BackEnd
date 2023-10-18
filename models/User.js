const { Schema } = require('mongoose')
const bcrypt = require("bcrypt")

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, "First name must be more than 2 characters"],
    maxlength: [99, "the limit is 99 character"],
  },
    userType: {
    type: String, 
    required: true 
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
    passwordDigest: {
      type: String, 
      required: true },
    profilePicture: {
      type: String,
      required:true,
      },
    address: {
      type: String, 
      required: true},
    telephone:{
      type: Number, 
      required: true}
  },
  { timestamps: true }
)

module.exports = userSchema
