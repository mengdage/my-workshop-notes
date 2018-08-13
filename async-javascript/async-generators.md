# Async Generators

```javascript
function* createFlow() {
  const data = yield fetch('...')
  console.log(data)
}

const returnNextElement = createFlow()
const futureData = returnNextElement.next()
futureData.then(function trigger () {
  returnNextElement.next(data)
})
```
