const DllPlugin = require('webpack').DllPlugin;
const path = require('path')
module.exports = {
  entry: {
    mvvm: ['react', 'react-dom']
  },
  output: {
    filename: '[name].dll.js',
    path: path.join(__dirname, '../dist/static/js'),
    library: '_dll_[name]',
  },
  plugins: [
    new DllPlugin({
      name: '_dll_[name]',
      path: path.join(__dirname, '../dist/static/js', '[name].manifest.json'),
    })
  ]
}