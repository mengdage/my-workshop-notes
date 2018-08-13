# Building Blocks

How to solve BIG async problems by thinking differently about `Events`. It make the hard asynchronous programming problem a little bit easier.

### Async problems

- Race Conditions
  - Two actions whose finishing times are undefined.
- Memory Leaks
  - Hook up to a DOM event and forget to unhook it.
- COmplex State Machines
- Uncaught Async Errors
  - `try...catch` is for synchronous things.
  - JS has no ways for asynchronous errors.

```javascript
  function play(movieId, cancelButton, callback) {
    var movieTicket,
        playError,
        tryFinish = function() {
            if (playError) {
                 callback(null, playError);
            }
            else if (movieTicket && player.initialized) {
                 callback(null, ticket);
            }
        };
    cancelButton.addEventListener(“click”, function() { playError = “cancelled”; }
    if (!player.initialized) {
        player.init(function(error) {
            playError = error;
            tryFinish();   
        }
    }
    authorizeMovie(function(error, ticket) {
        playError = error;
        movieTicket = ticket;
        tryFinish();   
    });
  });
```

Problems in this piece of code:

- Use variables to track states (movieTicket & player.initialized).
  - If you use variables to track whether asynchronous programs are done or not by introducing state into your program, you'll find that over time you've got many variables and state, and it's hard to set them to correct values. 
  - This is actually the real source of complexity in most large asynchronous programs.
  - This approach does scale very well as your javascript program scales.
- Error handling. You have to make sure to clean up after an error occurs and forward that error along.
- No code to remove the event handler. By clicking a button, extra handlers are attached to the button and it slows down the system.
  - When doing synchronous things, `try...catch` does all that for us. But in asynchronous programming, we are on our own.


## Small JS Tutorial

- Use `forEach` instead of loops.
- Never change the array (`map`).
- Filter the array with `filter`.
- Create the `concatAll`. (no recursion)

```javascript
var getTopRatedFiles = user => 
  user.videoLists
    .map(videoList => videoList.videos
      .filter(video => video.rating === 5.0)
    ).concatAll();

getTopRateFiles(users)
  .forEach(film => console.log(file))
```

```javascript
// building the collection you want
var getElementDrags = elmt =>
  elmt.mouseDowns.
    map(mouseDown => document.mouseMoves.
      takeUntil(document.mouseUps)
    ).concatAll()

// consuming the data in that collection and dong something with it
getElementDrags(image)
  .forEach(pos => image.position = pos)
```

## Iterators Pattern and Observors Pattern

Events and arrays are both collections.

### Iterators

```javascript
const collection = ... // array, map, set, etc
const iterator = collection[Symbol.iterator]()
iterator.next() 
// > { value: ..., done: false }
iterator.next() 
// > { value: ..., done: false }
iterator.next() 
// > { value: ..., done: false }
iterator.next() 
// > { done: true }
```

With `iterator`, the consumer doesn't need to know the internal structure of a collection to pull out the data and consume it. 

### Observors

```javascript
document.addEventListener(
  'mousemove',
  function handler (e) {}
)

// > { clientX: .., clientY: ..}
// > { clientX: .., clientY: ..}
// > { clientX: .., clientY: ..}
// > { clientX: .., clientY: ..}
// > { clientX: .., clientY: ..}
// > { clientX: .., clientY: ..}
```

With `observor`, the consumer hands a callback function to the producer and the producer push information to the consumer throught the callback.


The two patterns are actually very similar. They're about a producer giving a consumer things one at a time. The only difference is who's in control.

Another difference is how the producers tell the consumers `errors` or `completion`.

- With `iterator`, the iterator returns `{ done: true }`.
- But with `observor`, there's no way yet.

### Relationships

> The designer of patterns made a mistake.

There actually exists some relationship between the two patterns. 

`Iterators <-------Progressively send information to a consumer--------> Observors`
