const Order = require('../models/Order')
const middleware = require('../middleware')
const User = require('../models/User')

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
      const order = await Order.create({ ...req.body })
      res.send(order)
    } catch (error) {
      throw error
    }
  }

module.exports = {
  GetUserOrders,
  CreateOrder
}
