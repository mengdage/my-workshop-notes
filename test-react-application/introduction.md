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

## Write a react test.

```javascript
test('title', () => {
  // arrange
  // act
  // assert
})
```
