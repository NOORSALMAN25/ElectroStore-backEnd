// imports
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const path = require('path')

// Initialize app
const app = express()

// Database Configuration
const mongoose = require('./config/db')

// set Port Configuration
const port = process.env.PORT ? process.env.PORT : 3010

// Require MiddleWares
const morgan = require('morgan')

// use MiddleWares
app.use(express.json())
app.use(cors())
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', '*')
//   res.header('Access-Control-Allow-Methods', '*')
//   next()
// })
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
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
