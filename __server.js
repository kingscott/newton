var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')
var port = process.env.PORT || 2020

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  stats: {
    chunkModules: false,
    colors: true
  }
}).listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err)
  }
  console.log('listening at localhost: ' + port)
})
