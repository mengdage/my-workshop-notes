# Webpack Config

Webpack can take an object or a function.

```javascript
// webpack.config.js
module.exports = {

}

// or

module.exports = () => {
  return {

  }
}
```

## Access environment variables

```javascript
--env.mode development

// env = { mode: 'development' }
module.exports = (env) => {
  return {
    mode: env.mode
  }
}
```

## webpack dev server

webpack dev server uses Express. It creates a bundle in memory instead of in the dist/ folder, and serves it to the express server.
install it

```
npm install -D webpack-dev-server
```

add to the script

```javascript
scripts: {
  "start": "webpack-dev-server"
}
```

## Splitting environment config files

```javascript
// webpack.config.js
const path = require("path")
const webpack = require("webpack")
const webpackMerge = require('webpack-merge')
const loadPresets = require("./build-utils/loadPresets")
const modeConfig = env => require(`./build-utils/webpack.config.${env}.js`)(env)


module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      mode,
      output: {
        filename: "bundle.js"
      },
      plugins: [ ... ]
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  )
}
```
