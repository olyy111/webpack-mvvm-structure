const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
      noInfo: true,
      proxy: {
          '/hello': 'http://localhost:9898'
      }
  }
})