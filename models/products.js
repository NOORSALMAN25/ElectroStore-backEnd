const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: {
      type: String,
      enum: [
        'smartphones',
        'laptops',
        'tablets',
        'headphones',
        'wearables',
        'gaming',
        'cameras',
        'accessories'
      ],
      default: 'accessories'
    },
    image: { type: String },
    availability: { type: Boolean, default: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)
