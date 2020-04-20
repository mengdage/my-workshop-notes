# Introduction

- Fundamentals of what a test is and what role test frameworks play.
- Configure Jest for client side React project.
- Code coverage.
- Unit tests for Javascript utilities and React component.
- Snapshot test.
- Integration tests for React application.
- Cypress for a web application.
- End-to-end tests with Cypress.

## Types of tests

1. Static code analysis
  - eslint, flow-typed
  - Use Prettier to format code; use eslint to catch errors.
2. Unit tests
  - Modular design.
  - Usually mock out all of the dependencies.
  - Too many mockings mean the program is modular enough.
  - Revealing tight coupling (the opposite of modularity) is one of the many important roles that unit tests play in software creation.
  - Descriptions, expectations, error messages.
3. Integration tests
4. E2E tests

## First test

Manually set up result, expected, and comparison.

```javascript
const sum = (a, b) => a - b

let result, expected

result = sum(3, 7)
expected = 10
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}
```

Write an assertion library.

```javascript
result = sum(3, 7)
expected = 10
expect(result).toBe(expected)

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`) // <- that line
      }
    },
  }
}
// It will not run all tests. The fail one failed would cause the program to exit.
//    We can use try...catch... to improve.
// Error will always be throw at `that line`.
```

Write a test framework.

```javascript
test(title, () => {
  // arrange
  // act
  // assert
}
```

```javascript
test('sum adds numbers', () => {
  const result = sum(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (error) {
    console.error(`✕ ${title}`)
    console.error(error)
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    },
  }
}

// Since we use try...catch..., all tests will run even some of them fail.
```

- A test is something that throws an error if there is a bug, shows some error messages, and helps you identify the bugs.
- A test framework encapsulates many tests and provide better error messages.

## Write a react test.

```javascript
test('title', () => {
  // arrange
  const container = document.createElement('div')
  ReactDOM.render(<ItemList items={[]} />, container)

  // act
  // manipulate something

  // assert
  expect(container.textContent).toMatch('no items')
})
```

### Q&A

Testing styles

- Using a CSS and JS library to for styling can help to test the style in JS.
- It's better to use a visual regression tool to test appearances.
- Use snapchat to test DOM structures.
