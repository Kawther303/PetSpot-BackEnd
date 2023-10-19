const Cart = require('../models/Cart')
const middleware = require('../middleware')

const GetCart = async (req, res) => {
  try {
    const cart = await Cart.find({})
    res.send(cart)
  } catch (error) {
    throw error
  }
}
const CreateCart = async (req, res) => {
  try {
    const cart = await Cart.create({ ...req.body })
    res.send(cart)
  } catch (error) {
    throw error
  }
}

const UpdateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.cart_id, req.body, {
      new: true
    })
    res.send(cart)
  } catch (error) {
    throw error
  }
}

const DeleteCart = async (req, res) => {
  try {
    await Cart.deleteOne({ _id: req.params.cart_id })
    res.send({
      msg: 'Cart Deleted',
      payload: req.params.cart_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCart,
  CreateCart,
  UpdateCart,
  DeleteCart
}
