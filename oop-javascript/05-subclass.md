# Subclass

`inheritance` in javascript is actually `lookup`.

## Manual

```javascript
const userFunctions = {
  sayName: function () {},
  increment: function() {}
}

function userCreator (name, score) {
  const newUser = Object.create(userFunctions)
  newUser.name = name
  newUser.score = score

  return newUser
}

const paidUserFunctions = {
  increaseBalance: function () {}
}
Object.setPrototypeOf(paidUserFunctions, userFunctions)

function paidUserCreator (paidName, paidScore, balance) {
  const newPaidUser = userCreator(paidName, paidScore)
  Object.setPrototypeOf(newPaidUser, paidUserFunctions)
  newPaidUser.balance = balance

  return newPaidUser
}

const paidUser = paidUserCreator('meng', 100, 1000)

// paidUser.__proto__ --> paidUserFunctions
// paidUserFunctions.__proto__ --> userFunctions
```

Prototype design structure vs. OOP design structure

## `new`

`new` does:

- create an empty object
- set the __proto__ to func.prototype
- return the object

```javascript
function userCreator (name, score) {
  this.name = name
  this.score = score
}

userCreator.prototype.sayName = function () { }
userCreator.prototype.increment= function () { }

function paidUserCreator (paidName, paidScore, balance) {
  userCreator.call(this, paidName, paidScore)

  this.balance = balance
}

paidUserCreator.prototype = Object.create(userCreator.prototype)

paidUserCreator.prototype.increaseBalance = function () {}


```


## `class` keyword

`extends` does:

- `A extends B` set the A.prototype.__proto__ to B.prototype.
- set A.__proto__ to B. 

`super`
- `this` in A will be the result from `super`.
- `super` calls B to construct a new object with the __proto__ pointing to A.prototype instead of B.prototype. (`Reflect.construct`)

```javascript
class userCreator {
  constructor (name, score) {
    this.name = name
    this.score = score
  }

  sayName() {...}
  increment() {...}
}

class paidUserCreator extends userCreator {
  constructor(paidName, paidScore, balance) {
    // The `this` is not created by new, but returned
    // from the `super`
    super(paidName, paidScore)

    this.balance = balance
  }

  increaseBalance () {...}
}
```
