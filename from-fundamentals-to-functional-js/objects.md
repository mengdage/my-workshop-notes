# Objects

Javascript's core data structure.

Objec example:

```javascript
var person = {}
person.name = 'Mrs.White'

var person = {
  'name': 'Mrs. White' // Quotes around name are not necessary.
}

```

### Pass by what

- Primitives are passed by value. It gets its own spot in memory every single time.
- Non-premitives are passed by references. They are sharing the same place in memory.

### Arrays and objects

- Array is just an object with special methods.
- arr.0 failed because you cannot use a number with the dot notation.
- Use a function as the key of an object would stringify it. Bracket would stringify the content.
