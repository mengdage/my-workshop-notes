# Unit Tests

## Jest

```javascript
expect().toBe()  // ===

expect().toEqual() // lodash/isEqual

expect().toMatchObject() /// similar to `toEqual`, but for partial equality

// mock functions
const mockFn = jest.fn() 
mockFn.mock // <- mock object

expect(mockFn).toHaveBeenCalledTimes(n)
expect(mockFn).toHaveBeenCalledWith(n)

// toEqual, toMatchObject, and toHaveBeenCalledWith matching a schema
// Test shapes of data.
const birthday = {
  day: 18,
  month: 10,
  year: 1988,
  meta: {display: 'Oct 18th, 1988'},
}
const schema = {
  day: expect.any(Number),
  month: expect.any(Number),
  year: expect.any(Number),
  meta: {display: expect.stringContaining('1988')},
  // there's also expect.arrayContaining, or expect.objectContaining
}
expect(birthday).toEqual(schema)
```

## Unit Test

1. Don't put too much assertions in one test.

```javascript
// bad
test('', () => {
  expect()...
  expect()...
  expect()...
  expect()...
  expect()...
})

// good 
test('', () => {
  expect()...
})
test('', () => {
  expect()...
})
```

2. Make sure all assertions are run.
  - `expect.assertions`
  - Toggle assertions to break tests.

```javascript
// It passes because of early return.
test('', () => {
  if (...) return true

  expec(1).toBe(2)
  expec(1).toBe(2)
  expec(1).toBe(2)
})

// Use expect.assertions to make sure all assertions are run
test('', () => {
  expect.assertions(3)
  if (...) return true

  expec(1).toBe(2)
  expec(1).toBe(2)
  expec(1).toBe(2)
})

// OR you can make sure by toggling assertions.
```

### Demos

Use object spread to extract common properties.
```javascript
test('userToJSON', () => {
  const safeUser = {
    id: 'some-id',
    username: 'sarah'
  }

  const user = {
    ...safeUser,
    unsafe: '123'
  }

  expect(safeCheck(user)).toBe(safeUser)
})
```

Test Factory
- Good for pure functions.
- Generate test on the fly.

```javascript
describe('isPassswordAllowed', () => {
  const allowedPasswords = ['abcd123', 'jjjdm122fj2']
  const disallowedPasswords = ['abc', '', '123']

  allowedPasswords.forEach(pwd => {
    it(`"${pwd}" should be allowed`, () => {
      expect(sPassworldAllowed(pwd))toBe(true)
    }
  })

  disallowedPasswords.forEach(pwd => {
    it(`"${pwd}" should be disallowed`, () => {
      expect(sPassworldAllowed(pwd))toBe(false)
    }
  })
})
```

##
