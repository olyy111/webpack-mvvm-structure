var HtmlWebpackPlugin = require('html-webpack-plugin');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
var path = require('path');
console.log(1111, __dirname)
module.exports = {
  mode: 'none',
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx')
  },
  
  module: {
    rules: [
      { test: /\.(tsx|ts)?$/, 
        loader: "ts-loader",
        options: {
          configFile: '../tsconfig.js',
          transpileOnly: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new ForkTsCheckerWebpackPlugin({tsconfig: path.resolve(__dirname, '../tsconfig.js')})
  ]
}