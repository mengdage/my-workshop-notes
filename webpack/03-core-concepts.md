# Webpack Core Concepts

1. **entry** tells webpack what files to load. It compliments the output.
2. **output** tells webpack WHERE and HOW to distribute bundles (compilation).

```javascript
module.exports = {
    output: {
        filename: "bundle.js" // or use string interpolation "[chunkhash].js"
    }
}
```

3. **loaders + rules** tells webpack how to modify files before adding them to dependency graph.
    - Loaders are just javascript modules (functions) that take the source code and return it in a modified state.
    - Each rule set contains at least a matcher `test` and a loader `use`. Any file to be added to the dependency graph, if it matches the `test`, apply the `use` to transform it.
    - Chaining loaders

    ```javascript
    module: {
        rules: [
            {
                test: RegExp,
                use: (Array|String|Function),
                include: RegExp[],
                exclude: RegExp[],
                issuer: (RegExp|String)[],
                enfore: "pre"|"post"
            }
        ]
    }
    ```

    - Chaining loaders: loaders are executed from right to left

    ```javascript
    rules: [
        {
            test: /\less$/,
            use: ['style', 'css', 'less']
        }
    ]
    style.less ---> less-loader ---> css-loader ---> style-loader ---> outputStyle.js
    ```

4. **plugins** adds additional functionalities to Compilations (optimized bundled modules). More powerful with more access to Compiler API.
    - Objects with an `apply` property on the prototype chain.

Webpack itself is a event driven system. 80% of webpack is made up of its own plugin system.

```javascript
function MyPlugin () { }

MyPlugin.prototype.apply = function(compiler) {
    ....
}

// webpack.config.js
module.exports = {
    ...
    plugins: [
        // new a new plugin
        new MyPlugin(),
        ...
    ]
}
```
