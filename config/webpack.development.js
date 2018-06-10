const webpack = require('webpack');

module.exports = {
  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }, {
          loader: 'less-loader',
          options: {
            sourceMap: true
          }
        }]
      }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  // Turn off performance hints during development because we don't do any
  // splitting or minification in interest of speed. These warnings become
  // cumbersome.
  performance: {
    hints: false,
  },
};
