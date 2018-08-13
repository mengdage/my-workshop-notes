# Magic Comments

```javascript
import {
  /* webpackChunkName: "my-chunk-name" */
  module
}

// webpack.config.js
{
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].lazy-chunk.js"
  }
}
```
