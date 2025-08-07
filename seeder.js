const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Product = require('./models/product')

dotenv.config()

const products = [
  {
    name: 'Galaxy S24 Ultra',
    description: 'Flagship smartphone with advanced camera and AI features',
    price: 1299.99,
    category: 'smartphones',
    image: 'https://example.com/images/galaxy-s24.jpg',
    availability: true
  },
  {
    name: 'Razer Kraken Headset',
    description: 'Gaming headset with surround sound and RGB lighting',
    price: 99.99,
    category: 'gaming',
    image: 'https://example.com/images/razer-kraken.jpg',
    availability: true
  },
  {
    name: 'Apple Watch Series 9',
    description: 'Smart wearable with health tracking and Siri integration',
    price: 399.99,
    category: 'wearables',
    image: 'https://example.com/images/apple-watch.jpg',
    availability: true
  }
]

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(async () => {
    console.log('Connected to MongoDB')

    // Optional: Clear existing products before seeding
    await Product.deleteMany({})
    console.log('Existing products cleared')

    await Product.insertMany(products)
    console.log('Seeding complete ✅')
  })
  .catch((err) => {
    console.error('Seeding error ❌:', err)
  })
  .finally(() => {
    mongoose.disconnect()
  })
