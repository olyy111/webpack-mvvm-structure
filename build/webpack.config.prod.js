var merge = require('webpack-merge')
var baseConfig = require('./webpack.config.base.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('----prod-----')
module.exports = merge(baseConfig, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          }, 
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader', 
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].[chunkhash].css',
    })
  ]
})