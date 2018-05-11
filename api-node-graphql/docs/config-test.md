# Config & Tests

## Dynamic config

Create configs based on environment.
  - Dev
  - Testing
  - Production
  - Staging

Keep all config in one place.
Use config values in place of hard coded values in the app.
  - DB connection urls
  - ports
  - secrets

Setup config values on different platform using env variables.

## Build a config driven system.

```javascript
(function (__dirname, __filename, require, ..., process ) {
  // You code here ...
}())
```

```
config
├── dev.js
├── index.js
├── prod.js
└── testing.js
```

```javascript
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const env = process.env.NODE_ENV

const baseConfig = {...}

let envConfig = {}
switch (env) {
  case 'development': {
    envConfig = require('xxx').config
  case ...
  }
}

export merge(baseConfig, envConfig)
```