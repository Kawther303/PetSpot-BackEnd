const User = require('../models/User')
const middleware = require('../middleware/index')
const Cart = require('../models/Cart')
const { randGender } = require('@ngneat/falso')
const Register = async (req, res) => {
  try {
    console.log(req.body)

    const { email, password, name, address, telephone, userType } = req.body

    let passwordDigest = await middleware.hashPassword(password)

    let existingUser = await User.findOne({ email })
    if (existingUser) {
      return res
        .status(400)
        .send('A user with that email has already been registered!')
    } else {
      const user = await User.create({
        name,
        email,
        passwordDigest,
        address,
        telephone,
        userType,
        profilePicture: req.file.path

      })

      res.send(user)
      const petItem = []
      const pet = []

      const cart = await Cart.create({
        userId: user._id,
        itemId: petItem,
        petId: pet
      })
    }
  } catch (error) {
    throw error
  }
}

const SignIn = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )

    if (matched) {
      let payload = {
        id: user.id,
        name: user.name,
        email: user.email,
        userType: user.userType,
        address: user.address,
        telephone: user.telephone,
        profilePicture: user.profilePicture,

      }

      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'An error has occurred!' })
  }
}

const UpdateProfile = async (req, res) => {
  try {
    let updateData = req.body

    if (req.file && req.file.path) {
      // only if a file is uploaded update
      updateData.profilePicture = req.file.path
    }

    const user = await User.findByIdAndUpdate(req.params.user_id, updateData, {
      new: true

    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body

    let user = await User.findById(req.params.user_id)

    let matched = await middleware.comparePassword(
      user.passwordDigest,
      oldPassword
    )

    if (matched) {
      let passwordDigest = await middleware.hashPassword(newPassword)
      user = await User.findByIdAndUpdate(req.params.user_id, {
        passwordDigest
      })
      let payload = {
        id: user.id,
        email: user.email
      }
      return res.send({ status: 'Password Updated!', user: payload })
    }
    res
      .status(401)
      .send({ status: 'Error', msg: 'Old Password did not match!' })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred updating password!'
    })
  }
}

const ShowProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.user_id)
    res.send(user)
  } catch (err) {
    console.log(err)
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}

module.exports = {
  Register,
  SignIn,
  UpdateProfile,
  ShowProfile,
  UpdatePassword,
  CheckSession
}
