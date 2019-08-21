const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge(require('./webpack.base'), {
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '..', 'build'),
    publicPath: '/'
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
});
