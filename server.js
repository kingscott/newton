const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')
const port = process.env.PORT || 2020

config.entry = Object.keys(config.entry).reduce(function (result, key) {
  result[key] = [
    'webpack-dev-server/client?http://localhost:' + port,
    config.entry[key]
  ]
  return result
}, {})

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

  console.log('Listening at localhost:' + port)
})
