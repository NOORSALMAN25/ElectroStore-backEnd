const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema(
  {
    orderDate: { type: Date, default: Date.now },
    total: { type: Number, required: true },
    status: {
      type: String,
      enum: ['ongoing', 'completed', 'cancelled'],
      default: 'ongoing',
      required: true
    },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
        quantity: { type: Number, default: 1 },
        price: { type: Number, required: true }
      }
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true },
    status: {
      type: String,
      enum: ['ongoing', 'completed', 'cancelled'],
      default: 'ongoing',
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Order', orderSchema)
