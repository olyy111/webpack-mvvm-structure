const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
      proxy: {
          '/hello': 'http://localhost:9898'
      }
  }
})