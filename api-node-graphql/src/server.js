import express from 'express'
import { restRouter } from './api'

const app = express()

const apiRouter = express.Router()
apiRouter.get('/', (req, res) => res.json({ api: true }))

app.use('/api', apiRouter)
app.use('/rest', restRouter)

app.get('/', (req, res) => {
  res.json({ ahead: true })
})

app.all('*', (req, res) => {
  res.json({ hello: 'ok hot' })
})

export default app