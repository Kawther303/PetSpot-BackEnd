const Order = require('../models/Order')
const middleware = require('../middleware')
const User = require('../models/User')
const OrderSeq = require('../models/OrderSeq')

const GetUserOrders = async (req, res) => {
  try {
    const order = await Order.find({ userId: req.params.userId })
    res.send(order)
  } catch (error) {
    throw error
  }
}

const CreateOrder = async (req, res) => {
  try {
    const orderSeq = await OrderSeq.findOne({})
    console.log('orderSeq:' + orderSeq)
    let theSeq
    if (orderSeq) {
      theSeq = orderSeq.seqNumber
    } else {
      const Seq = await OrderSeq.create({ seqNumber: 1000001 })
      theSeq = 1000001
    }
    const order = await Order.create({ ...req.body, orderNumber: theSeq })
    res.send(order)
    const theNewSeq = theSeq + 1
    console.log('theNewSeq:' + theNewSeq)
    OrderSeq.findOne({ seqNumber: theSeq })
      .then((orderSeq) => {
        orderSeq.seqNumber = theNewSeq
        orderSeq.save()
      })
      .catch((err) => {
        console.log(err)
      })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetUserOrders,
  CreateOrder
}
