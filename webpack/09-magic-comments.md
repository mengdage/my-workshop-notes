# Magic Comments

https://webpack.js.org/api/module-methods/

https://webpack.js.org/api/module-methods/#import-

## webpackChunkName

```javascript
const getModule = () => import (
  /* webpackChunkName: "my-chunk-name" */
  'module'
)

// webpack.config.js
{
  output: {
    filename: "bundle.js",
    chunkFilename: "[name].lazy-chunk.js"
  }
}

// chunk
// my-chunk-name.lazy-chunk.js
```

# Building Your Library with Webpack

Only use webpack to build your library when using UMD.

```javascript
module.exports = {
  //...
  output: {
    library: 'someLibName',
    libraryTarget: 'umd',
    filename: 'someLibName.js'
  }
};
```

If you are going to bundle something and if webpack is one of your consumers, just ship the raw modules, raw ESM. Let babel in your local webpack application to load it and transpile it.
