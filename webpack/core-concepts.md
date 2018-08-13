# Webpack Core Concepts

1. **entry** tells webpack what files to load. It compliments the output.
2. **output** tells webpack where and how to distribute bundles (compilation).
3. **loaders + rules** tells webpack how to modify files before adding them to dependency graph.
    - Loaders are just javascript modules (functions) that take the source code and return it in a modified state.
    - Each rule set contains at least a matcher `test` and a loader `use`. Any file to be added to the dependency graph, if it matches the `test`, apply the `use` to transform it.
    - Chaining loaders
4. **plugins** adds additional functionalities to Compilations (optimized bundled modules). More powerful with more access to Compiler API.
    - Objects with an `apply` property on the prototype chain.

Webpack itself is a event driven system. 80% of webpack is made up of its own plugin system.
