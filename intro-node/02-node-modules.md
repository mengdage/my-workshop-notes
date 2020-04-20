# Node js Modules

## Modules

```javascript
const module1 = (function(exports, require, module, __dirname, __filename) {
  // Your node js code in a file.
})
```

These, exports, require, module, __dirname, __filename, are unique to each file, so they are passed as arguments. Other globals are attributions of `global`.

```javascript
console.log(global)
// [ 'DTRACE_NET_SERVER_CONNECTION',
//   'DTRACE_NET_STREAM_END',
//   'DTRACE_HTTP_SERVER_REQUEST',
//   'DTRACE_HTTP_SERVER_RESPONSE',
//   'DTRACE_HTTP_CLIENT_REQUEST',
//   'DTRACE_HTTP_CLIENT_RESPONSE',
//   'global',
//   'process',
//   'Buffer',
//   'clearImmediate',
//   'clearInterval',
//   'clearTimeout',
//   'setImmediate',
//   'setInterval',
//   'setTimeout' ]
```

## Creating modules

```javascript
const add = (num, num) => {}

// default export
module.exports = add

// named export
module.exports = {
  add,
  value: 1
}
```
