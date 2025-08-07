const mongoose = require('mongoose')

const AuthSchema = require('./Auth')
const productSchema = require('./product')
const reviewSchema = require('./review')
const orderSchema = require('./order')

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
