// imports
const express = require('express')
require('dotenv').config()
const path = require('path')

// Initialize app
const app = express()

// Database Configuration
const mongoose = require('./config/db')

// set Port Configuration
const port = process.env.PORT ? process.env.PORT : 3010

// Require MiddleWares
const morgan = require('morgan')
const cors = require('cors')

// --- CORS Configuration ---
// Define the allowed origins. We will allow our deployed Surge URL
// and our local development URL.
const allowedOrigins = [
  'http://localhost:5173', // Your local frontend dev server port (Vite's default)
  process.env.FRONTEND_URL // The URL you will set in Heroku's config
]

const corsOptions = {
  origin: (origin, callback) => {
    // 'origin' will be undefined for non-browser requests (e.g., Postman)
    // We allow requests with no origin OR if the origin is in our allowed list.
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// use MiddleWares
app.use(morgan('dev'))
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

// Root Route
app.get('/', (req, res) => {
  res.send('Your app is connected . . . ')
})

// Require Routers
const productRouter = require('./Routers/Product_Routs')
const orderRouter = require('./Routers/Order_Routs')
const AuthRouter = require('./Routers/AuthRouter')
const profileRouts = require('./Routers/Profile_Routs')
const cartRouter = require('./Routers/Cart_Routs')

// use Routers
app.use('/products', productRouter)
app.use('/orders', orderRouter)
app.use('/auth', AuthRouter)
app.use('/profile', profileRouts)
app.use('/cart', cartRouter)

// Listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
