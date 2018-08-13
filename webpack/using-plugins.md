# Using Plugins

## Useful Plugins

- webpack.ProgressPlugin
- webpack-merge

## Load CSS

### css-loader, style-loader

css-loader compile css files to js objects
style-loader extract these css objects, create a link tag for it and inject it in the head

```javascript
{
  module: {
    rules: [
      { test: /.css$/, use: ['style-loader', 'css-loader']}
    ]
  }
}
```

### css-loader, mini-css-extract-plugin

mini-css-extract-plugin extract css objects and concatnate them into one css files.

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

{
  module: {
    rules: [
      { test: /.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader']}
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ]
}
```

## Load Images

### url-loader, file-loader

url-loader use file-loader behind the scene.

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

{
  module: {
    rules: [
      { test: /.jpe?g$/, use: [
        { 
          loader: 'url-loader',
          options: { limit: xxxx }
        }]
      }
    ]
  }
}
```
