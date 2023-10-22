const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    orderNumber: { type: Number, require: false },
    orderItems: [
      {
        itemRef: { type: String, require: true },
        itemType: String,
        qty: Number,
        price: Number
      }
    ],
    totalAmount: {
      type: Number,
      require: true
    }
  },
  {
    timestamps: true
  }
)

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order
