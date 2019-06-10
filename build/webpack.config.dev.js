var  merge = require('webpack-merge')
var baseConfig =  require('./webpack.config.base.js')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
var port = 6611
var proxy = {
  '/weather': 'http://localhost:5566',
}
var SuccessProxyMsg = Object.keys(proxy).map(prefix => `前缀为${prefix}的请求代理在${proxy[prefix]}上`)
console.log('----dev-----')
module.exports = merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port,
    quiet: true, // 清楚dev编译无用的console信息
    proxy
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({ // 添加成功提示和自定义信息
      compilationSuccessInfo: {
        messages: [
          `You application is running here http://localhost:${port}`,
        ].concat(SuccessProxyMsg)
      },
    }),
  ],
})