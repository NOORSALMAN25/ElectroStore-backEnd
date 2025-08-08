const Product = require('../models/Product')

const AddingProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(200).send(product)
  } catch (error) {
    throw error
  }
} // tested

const GettingAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find()
    res.status(200).send(allProducts)
  } catch (error) {
    throw error
  }
} // tested

const GettingOneProduct = async (req, res) => {
  try {
    const oneProduct = await Product.findById(req.params.id)
    res.status(200).send(oneProduct)
  } catch (error) {
    throw error
  }
} // tested

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
} // tested

const DeletingProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id)
    res.send(200)
  } catch (error) {
    throw error
  }
} // tested

module.exports = {
  GettingAllProducts,
  GettingOneProduct,
  AddingProduct,
  UpdateProduct,
  DeletingProduct
}
