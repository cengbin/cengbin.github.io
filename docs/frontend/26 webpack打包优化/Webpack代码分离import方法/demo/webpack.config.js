const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HOST = require('ip').address()
const PORT = process.env.PORT && Number(process.env.PORT)

function resolve(to) {
  return path.resolve(__dirname, to)
}

module.exports = {
  mode: 'development',
  devtool: '#source-map',
  entry: {
    main: './src/main.js'
  },
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              singleton: true
            }
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 2048,
          name: path.posix.join('./', 'img/[name].[hash:7].[ext]'),
          publicPath: './'
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      inject: 'body',
      minify: {
        removeComments: false,
        collapseWhitespace: false,
        removeAttributeQuotes: false
      }
    }),
    new CopyWebpackPlugin([
      {
        from: resolve('static'),
        to: 'static',
        ignore: ['.*']
      }
    ])
  ],
  devServer: {
    contentBase: resolve('dist'),
    host: HOST || '0.0.0.0',
    port: PORT || 8081,
    open: false,
  }
}
