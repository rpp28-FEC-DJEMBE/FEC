const path = require('path');

module.exports = {
  entry: '/client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: '/public',
  },
  module: {
    rules : [
      {test: /\.jsx?$/,
        include:[ path.resolve(__dirname, /*to do*/)],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: "babel-loader",
        options: {presets: ["@babel/preset-react"]}
      },
      {test:/\.css$/, use: ['style-loader', 'css-loader']}
    ],
  }
}