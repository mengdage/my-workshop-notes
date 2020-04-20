# Object Creation

Store functions with their associated data.
This is the principle of `encapsulation`.

```javascript
const user1 = {
  name: 'meng',
  score: 4,
  increase: function () {
    this.score ++
  }
}

// alternative way 
const user2 = {}
user2.name = 'meng2'
user2.score = 4
user2.increase = function () {
  user2.score ++
}

const user3 = Object.create(null)
user3.name = 'meng3'
user3.score = 4
user3.increase = function () {
  user3.score ++
}
```

## DRY - functions

```javascript
function userCreator (name, socre) {
  const newUser = {}
  newUser.name = name
  newUser.score = score
  // increment function is repeated unnecessary for all instances
  newUser.increment = function () {
    newUser.score ++
  }

  return newUser
}

const user1 = userCreator('meng1', 4)
const user2 = userCreator('meng2', 4)
```
