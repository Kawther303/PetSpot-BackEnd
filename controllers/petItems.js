const PetItem = require('../models/PetItem')
const middleware = require('../middleware')

const GetPetItem = async (req, res) => {
  try {
    const petItem = await PetItem.find({ qtyAvailable: { $gt: 0 } })
    res.send(petItem)
  } catch (error) {
    throw error
  }
}
const ShowPetItem = async (req, res) => {
  try {
    const petItem = await PetItem.findById(req.params.id)
    res.send(petItem)
  } catch (error) {
    throw error
  }
}
const CreatePetItem = async (req, res) => {
  try {
    const item = await PetItem.create({ ...req.body, image: req.file.path })

    res.send(item)
  } catch (error) {
    throw error
  }
}

const UpdatePetItem = async (req, res) => {
  try {
    const petItem = await PetItem.findByIdAndUpdate(
      req.params.petItem_id,
      req.body,
      { new: true }
    )
    res.send(petItem)
  } catch (error) {
    throw error
  }
}

const DeletePetItem = async (req, res) => {
  try {
    await PetItem.deleteOne({ _id: req.params.petItem_id })
    res.send({
      msg: 'Item Deleted',
      payload: req.params.petItem_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPetItem,
  CreatePetItem,
  UpdatePetItem,
  DeletePetItem,
  ShowPetItem
}
