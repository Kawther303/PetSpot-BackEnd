const Pet = require('../models/Pet')
const middleware = require('../middleware')

const GetPet = async (req, res) => {
  try {
    const pet = await Pet.find({ available: true })
    res.send(pet)
  } catch (error) {
    throw error
  }
}
const CreatePet = async (req, res) => {
  try {
    const pet = await Pet.create({ ...req.body, image: req.file.path })
    res.send(pet)
  } catch (error) {
    throw error
  }
}

const UpdatePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.pet_id, req.body, {
      new: true
    })
    res.send(pet)
  } catch (error) {
    throw error
  }
}

const DeletePet = async (req, res) => {
  try {
    await Pet.deleteOne({ _id: req.params.pet_id })
    res.send({
      msg: 'Pet Deleted',
      payload: req.params.pet_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPet,
  CreatePet,
  UpdatePet,
  DeletePet
}
