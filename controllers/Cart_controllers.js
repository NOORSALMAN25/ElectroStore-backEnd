const Order = require('../models/orders')

const getCart = async (req, res) => {
  try {
    const cart = await Order.findOne({
      user: req.params.userId,
      status: 'ongoing'
    })
    if (!cart) {
      return res.status(200).send({ items: [] })
    }
    res.status(200).send(cart)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
} // tested

const addToCart = async (req, res) => {
  try {
    let cart = await Order.findOne({
      user: req.params.userId,
      status: 'ongoing'
    })
    if (!cart) {
      cart = await Order.create({
        user: req.params.userId,
        items: [],
        total: 0
      })
    }
    cart.items.push(req.body)
    cart.total += req.body.price * req.body.quantity
    await cart.save()
    res.status(200).send(cart)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
} // tested

const removeFromCart = async (req, res) => {
  try {
    // find the cart
    const cart = await Order.findOne({
      user: req.params.userId,
      status: 'ongoing'
    })
    if (!cart) return res.status(404).send({ error: 'Cart not found' })

    // Remove the item with the given itemid
    cart.items = cart.items.filter((item) => {
      return item._id.toString() !== req.params.itemId
    })

    // Calculate total
    let newTotal = 0
    for (let i = 0; i < cart.items.length; i++) {
      newTotal += cart.items[i].price * cart.items[i].quantity
    }
    cart.total = newTotal
    await cart.save()

    res.status(200).send(cart)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
} // tested

const clearCart = async (req, res) => {
  try {
    const cart = await Order.findOneAndDelete({
      user: req.params.userId,
      status: 'ongoing'
    })

    if (!cart) {
      return res.status(404).send({ error: 'Cart not found' })
    }

    res.status(200).send({ message: 'Cart deleted successfully' })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}

module.exports = { getCart, addToCart, removeFromCart, clearCart }
