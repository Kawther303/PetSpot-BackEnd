const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, "First name must be more than 2 characters"],
    maxlength: [99, "the limit is 99 characters"],
  },
  userType: {
    type: String, 
    required: true, 
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  passwordDigest: {
    type: String, 
    required: true 
  },
  profilePicture: {
    type: String,
    required: true,
  },
  address: {
    type: String, 
    required: true,
  },
  telephone: {
    type: Number, 
    required: true,
  }
}
// {
//   timestamps: true
// }
);

const User = model('User', userSchema);

module.exports = User;