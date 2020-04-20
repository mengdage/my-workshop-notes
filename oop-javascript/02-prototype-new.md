# Prototype & New

## Prototype 

Store shared functions in one object and have the interpreter look up to that object if it does not find the function on the current object.

```javascript
const funcStore = {
  increment: function () {this.score ++}
}

function userCreator (name, score) {
  const newUser = Object.create(funcStore)
  newUser.name = name
  newUser.score = score

  return newUser
}

const user1 = userCreator('meng', 4)
user1.increment() // through prototype chain

// user1
{
  name: 'meng',
  score: 4,
  __proto__: ---> funcStore
}
```

Create object, make the prototype bound and return the object seems long-winded.

## Keyword that automates the hard work: new

`new` does two things:
- create an empty (Object.create(func.prototype))
- return the object

Every function has a default property on their object version, `prototype`, which is an object. We use this object as the one storing the shared methods.

```javascript
function UserCreator(name, score) {
  this.name = name
  this.score = score
}

UserCreator.prototype.increment = function () {
  this.score ++
}
const user1 = new UserCreate('meng', 4)

// new
this = {}
return this

```
