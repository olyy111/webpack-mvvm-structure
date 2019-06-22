var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.config.base.js')
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var TerserPlugin = require('terser-webpack-plugin');
var prodConfig = require('../config').prod
console.log('----------prod打包--------')
module.exports = merge(baseConfig, {
  output: {
    filename: prodConfig.subDirectory + 'js/[name].[chunkhash].js',
    // publicPath: prodConfig.publicPath 加入了publicPath成为一个绝对路径后, 如果从本地打开， 就会有问题， 访问本地的绝对路径
  },
  optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /node_modules/,
            filename: prodConfig.subDirectory + 'js/vendors.[chunkhash].js',
            chunks: 'all'
          }
        }
      }
  },
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
      filename: prodConfig.subDirectory + 'css/[name].[contenthash].css',
    }),
    new OptimizeCSSAssetsPlugin(),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
    new TerserPlugin({
      test: /\.js(\?.*)?$/i
    }),
  ]
})