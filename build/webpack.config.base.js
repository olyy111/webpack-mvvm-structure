var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
console.log(1111, __dirname)
module.exports = {
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html',
    filename: 'index.html'
  })]
}