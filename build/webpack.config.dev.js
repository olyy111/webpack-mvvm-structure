var  merge = require('webpack-merge')
var baseConfig =  require('./webpack.config.base.js')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
var port = 6611
console.log('----dev-----')
module.exports = merge(baseConfig, {
  devServer: {
    port,
    quiet: true // 清楚dev编译无用的console信息
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({ // 添加成功提示和自定义信息
      compilationSuccessInfo: {
        messages: [`You application is running here http://localhost:${port}`]
      },
    }),
  ],
})