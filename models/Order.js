const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    orderNumber: { type: String, require: true },
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

module.exports = { Order }
