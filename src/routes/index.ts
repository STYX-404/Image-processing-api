import express from 'express'
import images from './api/images'

const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('🟢 The server is connected and the API is ready ➡️ Go to /images')
})

routes.use('/images', images)

export default [routes, images]
