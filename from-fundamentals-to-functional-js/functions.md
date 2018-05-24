# Functions

Functions have parameters which do not have value until you pass some arguments to the function.

Arrow functions don't have `this` and `argument`.

Projecting: get some data and transform it into other form you want.

The `arguments` is only affected by the the values being passed to the function.

```javascript
function add (a, b = 2) {
  console.log(arguments)  // [3]; does not include the default argument.
}

add(3)
```
