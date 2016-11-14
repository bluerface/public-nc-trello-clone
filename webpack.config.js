const path = require('path');
const webpack = require('webpack');

const bundleFolder = path.join(__dirname, 'public', 'js');
const imgSrcFolder = path.join(__dirname, 'src', 'img');
const cssSrcFolder = path.join(__dirname, 'src', 'css');

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    filename: 'bundle.js',
    path: bundleFolder,
    publicPath: '/js/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        loader: 'url',
        include: imgSrcFolder
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: cssSrcFolder
      }
    ]
  }
};
