# Using Plugins

## CSS

### development - style-loader

css-loader compile css files to js objects
style-loader extract these css objects, create a link tag for it and inject it in the head

```javascript
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        "style-loader", "css-loader"
      ]
    }

  ]
}

// enable hot module replace for css
// Webpack has the capability of being able to patch changes incrementally
// without having to refresh the page.
scripts: {
  "dev": "webpack-dev-server --hot"
}
```

### production - mini-css-extract-plugin

mini-css-extract-plugin extract css objects and concatnate them into one css files.

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        {
          name: MiniCssExtractPlugin.loader,
          options: {
            ...
          }
        },
        "css-loader",
      ]
    }
  ]
},
plugins: [
  new MiniCssExtractPlugin({...})
]
```

## file & url loader


url-loader use file-loader behind the scene.

`yarn add -D file-loader url-loader`

```javascript
module: {
  rules: [
    {
      test: /.jpe?g/,
      use: [
        {
          loader: "css-loader",
          options: {
            limit: 5000
          }
        }
      ]
    }
  ]
}

import image from './webpack-logo.jpg'

console.log(image) // base64 string
```

HMR is usually abstracted with a loader.
