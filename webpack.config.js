var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: './dist/app.js',
    publicPath: '/',
    path: __dirname,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /build|lib|node_modules/,
    }],
    preLoaders: [{
      test: /\.js$/,
      loaders: ['eslint'],
      exclude: /build|lib|node_modules/
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  eslint: {
    configFile: '.eslintrc'
  },
};
