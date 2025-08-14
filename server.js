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

const allowedOrigins = [
  'http://localhost:5173', // local dev
  'https://electro-store.surge.sh' // production frontend
]

// use MiddleWares
app.use(morgan('dev'))
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (mobile apps, curl, etc.)
      if (!origin) return callback(null, true)
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not allow access from the specified Origin.'
        return callback(new Error(msg), false)
      }
      return callback(null, true)
    },
    credentials: true // if you want cookies or auth headers
  })
)
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
