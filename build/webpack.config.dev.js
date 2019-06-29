var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig =  require('./webpack.config.base.js')
var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
var slash = require('slash')
var devConfig = require('../config').dev

var SuccessProxyMsg = Object.keys(devConfig.proxy).map(prefix => `前缀为${prefix}的请求代理在${devConfig.proxy[prefix]}上`)
console.log('-----------dev打包----------')
module.exports = merge(baseConfig, {
  output: {
    filename: '[name].js'
  },
  cache: true,
  stats: {
    timings: true
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: devConfig.port,
    quiet: true, // 清楚dev编译无用的console信息
    proxy: devConfig.proxy,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: true,
              getLocalIdent: (context, localIdentName, localName, options) => {
                if (
                  context.resourcePath.includes('node_modules')
                ) {
                  return '';
                }
                const match = context.resourcePath.match(/src(.*)/);
                if (match && match[1]) {
                  const projectPath = match[1].replace('.css', '');
                  const arr = slash(projectPath)
                    .split('/')
                    .map(a => a.replace(/([A-Z])/g, '-$1'))
                    .map(a => a.toLowerCase());
                  return `projectname${arr.join('-')}-${localName}`.replace(/--/g, '-');
                }
                return '';
              }
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: true,
              getLocalIdent: (context, localIdentName, localName, options) => {
                if (
                  context.resourcePath.includes('node_modules')
                ) {
                  return '';
                }
                const match = context.resourcePath.match(/src(.*)/);
                if (match && match[1]) {
                  const projectPath = match[1].replace('.scss', '');
                  const arr = slash(projectPath)
                    .split('/')
                    .map(a => a.replace(/([A-Z])/g, '-$1'))
                    .map(a => a.toLowerCase());
                  return `projectname${arr.join('-')}-${localName}`.replace(/--/g, '-');
                }
                return '';
              }
            }
          }, 
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({ // 添加成功提示和自定义信息
      clearConsole: false,
      compilationSuccessInfo: {
        messages: [
          `You application is running here http://localhost:${devConfig.port}`,
        ].concat(SuccessProxyMsg)
      },
    }),
    new webpack.DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("development") }),
  ],
})