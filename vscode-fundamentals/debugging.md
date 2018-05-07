# Debugging

`node --inspect --inspect-brk index.js`

## Inspector vs Legacy Protocol

new `inspect` protocol to communicate with javascript runtime.

legacy `V8 debugger` protocol (node v6 and before)

## Launch vs.Attach

```js
{
  "type": "node",       // chrome
  "request": "attach",  // launch
}
```

## conditional breakpoints

- count
- expression

## Restart Frame

## Column Breankpoints

## Skipping Code

Skip library code.