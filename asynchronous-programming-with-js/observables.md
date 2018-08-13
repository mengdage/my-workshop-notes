# Observables

Observables can model:

- Events
- Async Server Requests
- Animation

## Adapt Push APIs to Observables

Because there's no standard way of saying `completion` or `errors`, there are many stream APIs on the web that are slightly different. Some have a way of indicating completion, some might have a way of say errors, and some might have both.

- DOM Events
- Websockets
- Server-sent Events
- Node Streams
- Service Workers
- XMLHttpRequest
- setInterval

=> Observables

### Adapt Events to Observables

```javascript
var mouseMoves = Observables.fromEvent(element, 'mousemove')

// Event Subscription
var handler = (e) => console.log(e)

// Normal subscribe
document.addEventListener('mousemove', handler)

// Normal unsubscribe
document.removeEventListener('mousemove', handler)

// Observable way of subscribe
var subscription = mouseMoves.forEach(
  // next data
  event => console.log(event),
  // error
  error => console.error(error),  // optional
  // completion
  () => console.log('done')       // optional
)

// or use an observer object. The observer observes the observable.
var subscription2 = mouseMoves.forEach({
  onNext: event => console.log(event),
  onError: error => console.error(error),
  onCompleted: () => console.log('done')
})

// Observable way of unsubscribe
subscription.dispose()
```

```javascript
// fromEvent
Observer.fromEvent = function (element, eventName) {
  // return Observable object
  return {
    forEach: function (observer) {
      const hanlder = (e) => observer.onNext(e)
      element.addEventListener(eventName, hanlder)

      // return a subscription object
      return {
        dispose: function () {
          element.removeEventListener(eventName, handler)
        }
      }
    }
  }
}
```

