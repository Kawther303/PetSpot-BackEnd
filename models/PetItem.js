const mongoose = require('mongoose')

const petItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
    qtyAvailable: { type: Number},
    unit: { type: String},
    brand: { type: String},
    price: { type: Number, required: true },
    itemType: {
      type: Array,
      required: false
    }
  },
  {
    timestamps: true
  }
)

const PetItem = mongoose.model('PetItem', petItemSchema)

module.exports = PetItem
