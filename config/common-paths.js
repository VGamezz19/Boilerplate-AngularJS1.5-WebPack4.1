const { resolve } = require('path');

module.exports = {
  root: resolve(__dirname, '../'),
  src: resolve(__dirname, '../', 'app'),
  build: resolve(__dirname, '../', 'build'),
  public: resolve(__dirname, '../', 'public'),
};
