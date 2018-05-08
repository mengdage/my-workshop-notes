import http, { createServer } from 'http'
import app from './server'

const server = createServer(app)
let currentApp = app

server.listen(3000, () => {
  console.log('Server listening on 3000.')
})

if (module.hot) {
  module.hot.accept('./server.js', () => {
    server.removeListener('request', currentServer)
    server.once('request', app)
    currentApp = app
  })
}
