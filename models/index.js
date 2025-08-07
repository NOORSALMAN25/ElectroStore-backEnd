const mongoose = require('mongoose')

const AuthSchema = require('./Auth')
const productSchema = require('./Product')
const reviewSchema = require('./Review')
const orderSchema = require('./Order')

const Auth = mongoose.model('Auth', AuthSchema)
const Product = mongoose.model('Product', productSchema)
const Review = mongoose.model('Review', reviewSchema)
const Order = mongoose.model('Order', orderSchema)

module.exports = {
  Auth,
  Product,
  Review,
  Order
}
