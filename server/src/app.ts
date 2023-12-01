import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import healthRoute from './health/routes'
import notesRoute from './notes/routes'
import authRoutes from './auth/routes'
import { rateLimit } from './ratelimit/middlewares'
import { authenticate } from './auth/middlewares'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(cors())

app.use('/', healthRoute)
app.use('/notes', rateLimit, authenticate, notesRoute)
app.use('/auth', authRoutes)

// TODO: winston or another logger
const server = async () => {
  try {
    await mongoose.connect('mongodb://root:example@127.0.0.1:27017')
    console.log(
      `📄 MongoDB connected on: ${
        process.env.MONGO_URL || 'mongodb://127.0.0.1:27017'
      }`
    )
  } catch (err) {
    console.error('MongoDB connection failed')
    console.error(err)
    throw err
  }

  app.listen(port, () => {
    console.log(`🚀 App running on port:: ${port}`)
  })
}

export { server }
