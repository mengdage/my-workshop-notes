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

