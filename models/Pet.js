const mongoose = require('mongoose')

const PetSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: false },
    petType: { type: Array, require: true },
    price: { type: Number, require: true },
    forAdoption: { type: Boolean, require: false },
    petImage: { type: String, required: true },
    price: Number
  },
  {
    timestamps: true
  }
)

const Pet = mongoose.model('Pet', PetSchema)

module.exports = { Pet }
