const path = require('path')

module.exports = {
  name: 'server',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: 'css-loader/locals'
      }
    ]
  },
  entry: path.resolve(__dirname, '../server/render.js'),
  output: {
    libraryTarget: 'commonjs2'
  }
}
