var webpack = require('webpack')

var loaders = ['babel']
var port = process.env.PORT || 2020

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
]
var entry = {
  full: './src/app.js'
}
var devtool

if (process.env.NODE_ENV === 'development') {
  devtool = 'eval-source-map'
  plugins = plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
  entry = Object.keys(entry).reduce(function (result, key) {
    result[key] = [
      'webpack-dev-server/client?http://localhost:' + port,
      'webpack/hot/only-dev-server',
      entry[key]
    ]
    return result
  }, {})
} else {
  plugins = plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}

module.exports = {
  devtool: devtool,
  entry: entry,
  output: {
    filename: './lib/[name]/build.js',
    publicPath: '/',
    path: __dirname
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /build|lib|node_modules/,
      loaders: loaders
    }],
    preLoaders: [{
      test: /\.js$/,
      exclude: /build|lib|node_modules/,
      loaders: ['standard']
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: plugins
}
