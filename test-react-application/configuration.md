# configuration

Babel should be configured to transpile everything expect `import` when using babel and webpack. It's because webpack support tree shacking by using `import`.

```javascript
// .babelrc.js
const isTest = process.env.NODE_ENV === 'test'

// commonjs is the default Node module system
module.exports = {
  presets: [['env', {modules: isTest ? 'commonjs' : false}], 'react'],
  plugins: [
    'syntax-dynamic-import',
    'transform-class-properties',
    'transform-object-rest-spread',
  ],
}

// in package.json
// not necessary in babel 7

{
  ...,
  "babel": {
    "presets": "./.babelrc.js"
  }
}

// OR

// .babelrc.json
{
  "env": {
    "development": {...},
    "production": {...},
    "test": {...}
  }
}

```

### Jest JSDOM

Jest load JSDOM by default.

```javascript
{
  ...,
  "jest": {
    "testEnvironment": "jest-environment-node" // or "node", "jsdom"
  }
}
```

### CSS Imports

`import styls from './xxx.module.css'`

NodeJS does not recognize css files.

```javascript
"moduleNameMapper": {
  // For css modules 
  '\\.module.css$': 'identity-obj-proxy',
  '\\.css$': require.resolve('./emptyModule')
}
```

### CSS Modules

Right now NodeJS doesnot support ES modules or dynamic imports. You can use `require` to load module synchronous when needed. Babel has a plugin to transform dynamic import to a `require` and return a promise.

### Test Coverage

```javascript
{
  ...,
  "scripts": {
    test: "jest --coverage"
  }
}
```

### Jset Watch

```javascript
{
  ...,
  "scripts": {
    test: "jest --coverage",
    test:watch: "jest --watch"
  }
}
```
