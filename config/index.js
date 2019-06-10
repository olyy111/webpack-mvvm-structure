module.exports = {
  prod: {
    subDirectory: 'static/',
    publicPath: '/'
  },
  dev: {
    port: 6611,
    proxy: {
      '/weather': 'http://localhost:5566',
    }
  }
}
