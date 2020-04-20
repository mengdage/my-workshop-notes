# Why Webpack

Javascript is just script. It's just top down execution.

Two ways to run JS

```
1. <script src='./script.js'>

2. <script>console.log</script>
```

But both of them don't scale well.

- scope, size, readability

IIFE to the rescure

```
(function(params){
  
})(args)
```

Treat each file as a module (revealing module). 

Now we can concatenate files without concern of scope **collision**.

Cons:

- But concat doesn't help **DEAD CODE**.
- Having lots of IIFE is slow.
- Cannot do dynamic loading.

# History of JS Modules

How to include js files when there's no html.

## Common JS module

Use `require` to inject other pieces of a module into the current module.

```
// main.js
const { add, divide } = require('./math')

// math.js
module.exports.add = () => {}
module.exports.divide = () => {}

```

`NPM + Node + Modules = taking over the world`

### Problems

- No Browser Support.
- No live binding. (problems with circular references)
- Slow resolution.
- No lazy loading.
- TOO DYNAMIC

CommonJS is too dynamic for the web.

## AMD

```
define('myLib', ['depend1', 'depend2'], function (a, b) {
  return {...}
})
```

Or even `AMD` + `CommonJS`

```
define('myLib', ['depend1', 'depend2'], function (a, b) {
  var c = require('c')
  return {...}
})
```

- TOO DYNAMIC

## Solution: ESM

```
import { add, divide } from './math'
export result
```

- No Node support yet.
- Too slow for browser.

## Webpack Module Bundler

Let you write any module format(mixed), compiles them for the browser.

The most performant way to ship JS today.

### Three ways to config webpack

- webpack config file
- webpack cli
- webpack node API
