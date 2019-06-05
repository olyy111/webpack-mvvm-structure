var merge = require('webpack-merge')
var baseConfig = require('./webpack.config.base.js')
console.log('----prod-----')
module.exports = merge(baseConfig, {})