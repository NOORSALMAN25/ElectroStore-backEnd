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
  } catch (error) {
    throw error
  }
}

const GettingOneProduct = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const UpdategProduct = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const DeletingProduct = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GettingAllProducts,
  GettingOneProduct,
  AddingProduct,
  UpdategProduct,
  DeletingProduct
}
