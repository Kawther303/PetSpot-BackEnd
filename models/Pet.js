const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: String, required: false },
    petType: { type: Array, require: true },
    Description: { type: String, require: false },
    forAdoption: { type: Boolean, require: false },
    image: { type: String, required: false },
    price: Number,
    available: Boolean
  },
  {
    timestamps: true
  }
)

const Pet = mongoose.model('Pet', PetSchema)

module.exports = Pet
