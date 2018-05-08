# Hot Node Webpack

References:

- [hot-node-example](https://github.com/webpack/hot-node-example)
- [Hot reload all the things!](https://hackernoon.com/hot-reload-all-the-things-ec0fed8ab0)

Process

- Compile the server code with webpack.
- Use `target: node` or `target: "async-node"`.
- Enable HMR via `--hot` or `HotModuleReplacementPlugin`.
- Use `webpack/hot/poll` or `webpack/hot/signal`
  - The first polls the fs for updates (easy to use)
  - The second listens for a process event to check for updates (you need a way to send the signal)
- Run the bundle with node.