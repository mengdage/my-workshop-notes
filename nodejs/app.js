const minimist = require('minimist')
const margs = minimist(process.argv.slice(2), {
  alias: {
    p: 'port'
  },
  default: {
    port: 8080
  },
  string: ['age']
})

console.log('argv', process.argv)
console.log('margs', margs)
console.log('margs.i', margs.i)
