# Iterators

Programs store data and apply functionality to it. There're two parts:

1. The process of accessing each element.
2. Apply what we want to do to each element.

```javascript
function iterate (array) {
  let i = 0

  return (function next () {
    return array[i++]
  })
}

const next = iterate([1, 2, 3])
```

Iterators automate the accessing of each element and make elements available to us in a smooth way.

When a function is defined, it gets a bond to the surrounding Local Memory in which it has been defined.

Lexically scoped language.

backpack == Persistant Lexically Scoped Referenced Data == Closed Over Variable Environment
== Closure: functions persisting their lexical references

`put these in the function's closure`

The only way to get a function with a backpack is by returning a function from inside another funciton.

Now with `next`, we have decoupled the process of accessing each element from what we want todo to each element. 

Iterators turn the data into streams of actual values we can access one after another.
