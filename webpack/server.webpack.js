const path = require('path')

const rootPath = path.resolve(__dirname, '..')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: path.resolve(rootPath, 'server', 'server.ts'),
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.node$/,
        use: {
          loader: 'node-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(rootPath, 'server', 'server.ts'),
    host: 'localhost',
    port: 4531
  },
  output: {
    path: path.resolve(rootPath, 'dist/server'),
    filename: '[name].js'
  },
}
