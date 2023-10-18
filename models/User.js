const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    userType: { type: String, required: true },
    email: { type: String },
    passwordDigest: { type: String, required: true },
    address: {type: String, required: true},
    telephone:{type: Number, required: true}
  },
  { timestamps: true }
)

module.exports = userSchema
