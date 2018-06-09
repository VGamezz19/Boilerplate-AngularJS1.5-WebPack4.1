const commonPaths = require('./common-paths');
const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: commonPaths.build,
    filename: '[name].js',
    chunkFilename: 'chunks/[id].[chunkhash].js'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        emitError: true,
      }
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
    {
      test: /\.(png|jpg|svg|gif)$/,
      use: 'file-loader'
    },
    {
      test: /\.html$/,
      loader: 'raw-loader'
    }
    ]
  },
  plugins: [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: `${commonPaths.public}/index.html`,
      favicon: `${commonPaths.public}/favicon.ico`
    })
  ]
};
