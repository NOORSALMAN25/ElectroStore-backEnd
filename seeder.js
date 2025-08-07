const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Product = require('./models/product')

dotenv.config()

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB')

    const products = [
      {
        name: 'Galaxy S24 Ultra',
        description: 'Flagship smartphone with advanced camera and AI features',
        price: 1299.99,
        category: 'smartphones',
        image: 'https://example.com/images/galaxy-s24.jpg'
      },
      {
        name: 'Razer Kraken Headset',
        description: 'Gaming headset with surround sound and RGB lighting',
        price: 99.99,
        category: 'gaming',
        image: 'https://example.com/images/razer-kraken.jpg'
      },
      {
        name: 'Apple Watch Series 9',
        description: 'Smart wearable with health tracking and Siri integration',
        price: 399.99,
        category: 'wearables',
        image: 'https://example.com/images/apple-watch.jpg'
      }
    ]

    return Product.insertMany(products)
  })
  .then(() => {
    console.log('Seeding complete ✅')
    mongoose.disconnect()
  })
  .catch((err) => {
    console.error('Seeding error ❌:', err)
  })
