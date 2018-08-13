# Unit Test

## Mocking

jest.fn()
jest.mock()

```javascript
// Here we import the module that's mocked ourselves.
// We can make an assertion on the mock module's functions.
import * as utilsMock from '../../utils/api'

jest.mock('../../utils/api', () => {
  return {
    push: jest.fn(() => Promise.resolve())
  }
})

test ('', () => {
  // here the push function is the mock function we created by using jest.fn.
  expect(utilsMock.push).toHaveBeenCalled()
})
```

```javascript
const flushPromises = () => {
  return new Promise(resolve => {
    // wait until the next ticket of the event loop before it resolves
    setTimeout(resolve, 0)
  })
}
```

## Problems of Enzyme

Your tests should resembles the way your software is used. The more your tests resemble the way your software is used, the more confidence they can give you.

Shallow rendering automatically mocks everything even the internal components. So refactor would break yous test. It means you are testing implementation details.
