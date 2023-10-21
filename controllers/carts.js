const Cart = require('../models/Cart')
const middleware = require('../middleware')
const User = require('../models/User')

const GetCart = async (req, res) => {
  try {
    const cart = await Cart.find({})
    res.send(cart)
  } catch (error) {
    throw error
  }
}
const GetUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })
    res.send(cart)
  } catch (error) {
    throw error
  }
}

// const AddItem = async (req, res) => {
//   try {
//     console.log(req.query.itemId)
//     const cart = await Cart.findOne({ userId: req.params.userId })
//     cart.itemId.push(req.query.itemId)
// Cart.save()
//     // const cartUpdate = await Cart.findByIdAndUpdate(cart._id, cart)

//     res.send(cartUpdate)
//   } catch (error) {
//     throw error
//   }
// }
const AddItem = (req, res) => {
  console.log('req.params' + req.params)
  console.log('req.query' + req.query)
  let newItem = req.params.itemId
  Cart.findOne({ userId: req.params.userId })
    .then((cart) => {
      cart.itemId.push(newItem)
      cart.save()
      res.send(cart)
    })
    .catch((err) => {
      console.log(err)
    })
}

const AddPet = async (req, res) => {
  //   try {
  //     const cart = await Cart.findById(req.params.userId)

  //     cart.petId.push(req.params.petId)
  //     cart.save()
  //     res.send(cart)
  //   } catch (error) {
  //     throw error
  //   }
  // }

  let newPet = req.params.petId
  Cart.findOne({ userId: req.params.userId })
    .then((cart) => {
      cart.petId.push(newPet)
      cart.save()
      res.send(cart)
    })
    .catch((err) => {
      console.log(err)
    })
}

const DeleteItem = async (req, res) => {
  let theItem = req.params.ItemId
  Cart.findOne({ userId: req.params.userId })
    .then((cart) => {
      let itemIndex = cart.itemId.indexOf(theItem)
      cart.itemId.splice(itemIndex, 1)
      cart.save()
      res.send(cart)
    })
    .catch((err) => {
      console.log(err)
    })
}

const DeletePet = async (req, res) => {
  //   try {
  //     const cart = await Cart.findById(req.params.userId)
  //     let petIndex = cart.petId.lastIndexOf(req.params.petId)
  //     cart.petId.splice(petIndex, 1)
  //     await cart.save()
  //     res.send(cart)
  //   } catch (error) {
  //     throw error
  //   }
  // }
  let thePet = req.params.petId
  Cart.findOne({ userId: req.params.userId })
    .then((cart) => {
      let petIndex = cart.petId.indexOf(thePet)
      cart.petId.splice(petIndex, 1)
      cart.save()
      res.send(cart)
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = {
  GetCart,
  AddItem,
  AddPet,
  GetUserCart,
  DeleteItem,
  DeletePet
}
