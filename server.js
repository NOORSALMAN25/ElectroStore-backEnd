// imports
const express = require('express')
require('dotenv').config()
const path = require('path')

// Initialize app
const app = express()

// Database Configuration
const mongoose = require('./config/db')

// set Port Configuration
const port = process.env.BACKEND_PORT ? process.env.BACKEND_PORT : 3001

// Require MiddleWares
const morgan = require('morgan')
const cors = require('cors')

// use MiddleWares
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))

// Root Route
app.get('/', (req, res) => {
  res.send('Your app is connected . . . ')
})

// Require Routers
const productRouter = require('./Routers/Product_Routs')
const orderRouter = require('./Routers/Order_Routs')

// use Routers
app.use('/product', productRouter)
app.use('/order', orderRouter)

// Listener
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
