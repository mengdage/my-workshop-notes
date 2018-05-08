import express from 'express'

const app = express()

app.all('*', (req, res) => {
  res.json({ hello: 'ok hot' })
})

export default app