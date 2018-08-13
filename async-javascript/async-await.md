# Async Await

Async/Await simplifies the process of async generator and finally fixes the inversion of control problem of callbacks.

```javascript
async function createFlow() {
  const data = await fetch('xxx')
  console.log(data)
}

createFlow()
```

No need for a trigger function on the promise resolution, instead we automatically trigger the resumption of the createFlow execution. (miscrotask queue)
