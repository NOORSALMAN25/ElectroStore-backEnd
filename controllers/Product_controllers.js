const { Product } = require('../models')

const AddingProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).send(product)
  } catch (error) {
    throw error
  }
}

const GettingAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find()
    res.status(200).send(allProducts)
  } catch (error) {
    throw error
  }
}

const GettingOneProduct = async (req, res) => {
  try {
    const oneProduct = await Product.findById(req.params.bookId)
    res.status(200).send(oneProduct)
  } catch (error) {
    throw error
  }
}

const UpdateProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.status(200).send(updateProduct)
  } catch (error) {
    throw error
  }
}

const DeletingProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id)
    res.send(200)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GettingAllProducts,
  GettingOneProduct,
  AddingProduct,
  UpdateProduct,
  DeletingProduct
}
