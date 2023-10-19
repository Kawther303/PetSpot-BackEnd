const mongoose = require('mongoose')

const CartSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    itemId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'PetItem'
    },
    petId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pet'
    }
  },
  {
    timestamps: true
  }
)

const Cart = mongoose.model('Cart', CartSchema)

module.exports = { Cart }
