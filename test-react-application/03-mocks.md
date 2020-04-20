# Mock function

A fake version of something.

## Monkey patching

```javascript
import * as utils from '../utils'

test('monkey patching test', () => {
  // Save the original one
  const original = utils.func

  // Overwrite with our mock function
  utils.func = () => {}

  // restore
  utils.func = original
})
```

Drawbacks:

- Modify the import module namespace, which is a bad idea. 
  - disable eslint: "rules": { "imporutilst/namespace": "off" }
  - When mocking a module, it's better to mock the entire module instead of monkey patching some properties.
- Cannot guarantee the func is called with legal arguments.
- We have to keep track of the original functions, their states, and restore them ourselves.


```javascript
jest.mock(
  relativePathToModuleToMock,
  functionThatReturnsMockObject // <- this is the `eport default` / `module.exports`
)
```

```javascript
jest.mock('../utils', () => {
  const actualUtils = require.requireActual('../utils') // <- provided by jest

  return {
    ...actualUtils
    getWinner: jest.fn((p1, p2) => p2),
  }
})

beforeEach(() => {        // good use case for beforeEach since clearing mock is needed before each test
  utils.getWinner.mockClear()
})
```

```javascript
-- __mocks__
  |--- utils.js     // jest will always import this file when some test jest.mock('../utils.js')
-- __tests__
  |--- utils-spec.js
-- utils.js

// __mocks__/utils.js
export const getWinner = jest.fn((p1, p2) => p2)

// __tests__/utils-spec.js
import * as utils from '../utils.js'

// Does not provide a mock function, so jest will check if __mocks__/utils.js exists.
// If exists, it will use that module.
jest.mock('../utils.js') 
```

### jest.mock for node_modules

If there's a `__mocks__` in the the rootDir of jest and it contains some mock module for a module (axios.js), then jest will automatically pick it up when you import that module.

Use `jest.unmock('axio')` to unmock it.

```javascript
-- __mocks__
  |--- axio.js     // jest will always import this file when some test jest.mock('../utils.js')
-- apps
  |-- __tests__
    |--- utils-spec.js   // <- will pick __mocks__/axio.js if import 'axio'
  |-- utils.js
-- jest.config.js
```
