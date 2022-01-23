import express, { Application } from 'express'
import routes from './routes/index'

const app: Application = express()
const port = 5000

app.use('/api', routes)

app.listen(port, () => {
  console.log(`🟢 Listening on PORT: ${port}`)
})

export default app
