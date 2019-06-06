const path = require('path');

module.exports = {
  entry: path.join(__dirname, '/example/js/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/example'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
