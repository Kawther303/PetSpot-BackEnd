const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const path = require('path')

const AuthRouter = require('./routes/Auth')

const petItemRouter = require('./routes/petItems')
const petRouter = require('./routes/pets')
const cartRouter = require('./routes/carts')
const orderRouter = require('./routes/orders')
const postRouter = require('./routes/post')
const commentRouter = require('./routes/comment')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static('public'))

app.use('/auth', AuthRouter)
app.use('/petItem', petItemRouter)
app.use('/pet', petRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)

// app.use(
//   '/image',
//    express.static(
//     path.join(__dirname, 'public/pictures/profilePic/1698044468547-snake2.png')
//   )

// )

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

// Database connection code
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Successfully connected to MongoDB...')
    app.listen(PORT, () => {
      console.log(`Running Express server on Port ${PORT}...`)
    })
  })
  .catch((error) => {
    console.error('Connection error:', error.message)
  })
console.log()
