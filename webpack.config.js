const path = require('path');

// module.exports = {
//   mode: 'development',
//   entry: path.resolve(__dirname, 'client', 'index.jsx'),
//   devtool: 'inline-source-map',
//   output: {
//     path: path.resolve(__dirname, 'public'),
//     filename: 'bundle.js',
//   },
//   module: {
//     rules : [
//       {test: /\.js|jsx?$/,
//         exclude: [path.resolve(__dirname, 'node_modules')],
//         loader: "babel-loader",
//         options: {presets: ["@babel/preset-react"]}
//       },
//       {test:/\.css$/, use: ['style-loader', 'css-loader']}
//     ],
//   }
// }

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '/client/index.jsx'),
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
};