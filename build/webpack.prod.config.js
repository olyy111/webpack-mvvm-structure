const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin()],
      splitChunks: {
          cacheGroups: {
              vendors: {
                  test: /node_modules/,
                  filename: 'vendors.[chunkhash].js',
                  chunks: 'all'
              }
          },
      },
      // runtimeChunk: "single"
  },
  plugins: [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'static/css/[name].css',
        chunkFilename: '[id].css',
    }),
  ]
})