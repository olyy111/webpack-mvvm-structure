var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
  module: {
    entry: {
      app: ["@babel/polyfill", '../src/index.js')]
    },
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',

      },
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
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html',
    filename: 'index.html'
  })]
}