const path = require('path');

module.exports = {
  mode: 'development',
  entry: [
    path.resolve(__dirname, 'client', 'index.jsx')
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public',)
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx?$/],
        exclude: /node-modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}