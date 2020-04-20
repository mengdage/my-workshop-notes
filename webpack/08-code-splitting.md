# Code Splitting

Process of splitting pieces of code into async chunks at build time.

## Types of Code Splitting

- static
- "dynamic"
  - Nothing in webpack is actual dynamic.

## When to use

- Heavy Javascript library which you don't want to use upfront.
- Anything temporal.
- Routes, especially client-side route.

```javascript
import Listener from './listener.js'

// async import
const getModal = () => import('./src/modal.js')

Listener.on('wantModal', () => {
  // Async fetching module code from a separate chunk.
  getModal().then((module) => {
    module.initModal(element)
  })
})
```

## Webpack Code Splitting Under the Hood

Use `--mode=none` to see all magic.

```javascript
const getModal = () => import('./src/modal.js')
// ==>
const getModal = () => __webpack_require__.e(/* import() */ 1).then(__webpack_require__.bind(null, 10));

```
`__webpack_require__.e` would create a script tag to load the module

Create asynchronous bundle that can load on deman.


## `Dynamic` Code Splitting

```javascript

// Find all possible modules in this partial path and create bundles.
// ./src/themes/0.chunk.js
// ./src/themes/1.chunk.js
// ./src/themes/2.chunk.js
// ./src/themes/3.chunk.js
const getTheme = (themeName) => import(`./src/themes/${themeName}`)
```

Partial path is required!!! Webpack actually looks at the path provided by the partial path and create bundles for all files.

### When to use

- AB testing
- Theming
