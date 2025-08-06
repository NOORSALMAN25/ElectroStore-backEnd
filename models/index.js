const mongoose = require('mongoose')

const userSchema = require('./user')
const productSchema = require('./product')
const reviewSchema = require('./Review')
const orderSchema = require('./Order')

const User = mongoose.model('User', userSchema)
const Product = mongoose.model('Product', productSchema)
const Review = mongoose.model('Review', reviewSchema)
const Order = mongoose.model('Order', orderSchema)

module.exports = {
  User,
  Product,
  Review,
  Order
}
