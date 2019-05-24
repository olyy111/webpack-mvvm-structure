const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
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
  }
})