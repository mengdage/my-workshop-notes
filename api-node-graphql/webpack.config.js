const webpack = require('webpack')
const path = require('path')
const StartServerWebpackPlugin = require('start-server-webpack-plugin')

const nodeExternals = require('webpack-node-externals')

const PATHS = {
  app: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist')
}
module.exports = {
  entry: ['webpack/hot/poll?1000', './src/index.js'],
  watch: true,
  devtool: 'sourcemap',
  target: 'node',
  output: {
    path: PATHS.dist,
    filename: 'server.js'
  },
  externals: [nodeExternals({ whitelist: ['webpack/hot/poll?1000'] })],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: PATHS.app,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new StartServerWebpackPlugin({
      name: 'server.js'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
