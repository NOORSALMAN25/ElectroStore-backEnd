const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    total: { type: Number, required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 },
        price: { type: Number, required: true }
      }
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Order', orderSchema)
