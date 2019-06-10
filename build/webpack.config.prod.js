var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./webpack.config.base.js')
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
var TerserPlugin = require('terser-webpack-plugin');

console.log('----prod-----')
module.exports = merge(baseConfig, {
  optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin()],
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /node_modules/,
            filename: 'vendors.[chunkhash].js',
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
      filename: '[name].[chunkhash].css',
    }),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") }),
    new TerserPlugin({
      test: /\.js(\?.*)?$/i
    }),
  ]
})