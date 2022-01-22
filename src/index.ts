import express from 'express'
import routes from './routes/index'

const app = express()
const port = 5000

app.use('/api', routes)

app.listen(port, () => {
  console.log(`🟢 Listening on PORT: ${port}`)
})

export default app