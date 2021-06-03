const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'client', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules : [
      {test: /\.jsx?$/,
        include: [path.resolve(__dirname, /*to do*/)],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: "babel-loader",
        options: {presets: ["@babel/preset-react"]}
      },
      {test:/\.css$/, use: ['style-loader', 'css-loader']}
    ],
  }
}