# What Is A JavaScript Test

Javascript test is code that throws an error when the actual result of something does not match the expected output. It sets up some state, performs some action, and makes an assertion on the new state.

We need assertion library to make assertions.

```javascript
function expect (actual) {
  return {
    toBe (expected) {
      if (actual !== expected) throw new Error(`${actual} is not equal to ${expected}`)
    }
  }
}
```

We need some helper function to isolate tests.

```javascript
function test (description, callback) {
  try {
    callback()
    console.log(`Good! ${description}.`)
  } catch (error) {
    console.log(`Bad! ${description}.`)
    console.log(error)
  }
}
```

We also need a CLI tool that will search for all test fiels and run them. We need a **testing framework** and **test runner**, such as Jest.
