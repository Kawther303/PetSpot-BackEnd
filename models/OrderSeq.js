const mongoose = require('mongoose')

const OrderSeqSchema = new mongoose.Schema({
  seqNumber: { type: Number, required: true }
})

const OrderSeq = mongoose.model('OrderSeq', OrderSeqSchema)

module.exports = OrderSeq
