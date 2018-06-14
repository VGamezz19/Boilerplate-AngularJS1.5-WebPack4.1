const commonPaths = require('./common-paths');
const {
  ProgressPlugin
} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  entry: commonPaths.src,
  output: {
    path: commonPaths.build,
    filename: '[name].js',
    chunkFilename: 'chunks/[id].[chunkhash].js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules|scripts|assets)/,
        loader: 'eslint-loader',
        options: {
          emitError: true,
          formatter: require('eslint-friendly-formatter'),
          failOnWarning: true,
          failOnError: true,
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'ng-annotate-loader',
          options: {
            ngAnnotate: 'ng-annotate-patched',
            es6: true,
            explicitOnly: false
          },
        }, 'babel-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new ProgressPlugin(),
    new HtmlWebpackPlugin({
      template: `${commonPaths.public}/index.html`,
      favicon: `${commonPaths.public}/favicon.ico`,
      hash: true
    })
  ]
};
