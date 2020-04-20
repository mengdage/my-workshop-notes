# Default Prototype Chain

```javascript
const obj = {}

// obj is prototype linked to the global Object's prototype property.
obj.__proto__ === Object.prototype

Object.prototype = {
  hasOwnProperty: ...
  ...
}
```

Use `Object.getPrototypeOf` to get the prototype of an object.
