const mongoose = require('mongoose')

const PetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: false },
    petType: { type: Array, require: true },
    Description: { type: String, require: false },
    forAdoption: { type: Boolean, require: false },
    petImage: { type: String, required: false },
    price: Number
  },
  {
    timestamps: true
  }
)

const Pet = mongoose.model('Pet', PetSchema)

module.exports = Pet
