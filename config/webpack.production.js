const commonPaths = require('./common-paths');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCssAssetsWebpackPlugin()
    ]
  },
  plugins: [
    new CleanWebpackPlugin([commonPaths.build], { root: commonPaths.root }),
    new CopyWebpackPlugin([
      {
        from: `${commonPaths.public}/favicon.ico`,
        to: `${commonPaths.build}/favicon.ico`,
        toType: 'file'
      }
    ]),
    new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' })
  ]
};
