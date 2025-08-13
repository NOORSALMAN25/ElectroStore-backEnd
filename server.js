// imports
const express = require('express')
require('dotenv').config()
const path = require('path')
const cors = require('cors')

// Initialize app
const app = express()

// Database Configuration
const mongoose = require('./config/db')

// set Port Configuration
const port = process.env.PORT ? process.env.PORT : 3010

// -----------------------
// CORS Configuration
const allowedOrigins = [
  'http://localhost:5173', // Local dev
  'http://electro-store.surge.sh' // Surge frontend
]

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true)
      if (allowedOrigins.includes(origin)) return callback(null, true)
      return callback(new Error('Not allowed by CORS'))
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
  })
)

// Handle preflight requests explicitly
app.options(
  '*',
  cors({
    origin: allowedOrigins,
    credentials: true
  })
)

// -----------------------

// Require MiddleWares
const morgan = require('morgan')
const cors = require('cors')

// use MiddleWares
app.use(morgan('dev'))
// app.use(cors())
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
