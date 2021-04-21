const webpack = require('webpack');
const mergeDev = require('webpack-merge');
const commonDev = require('./webpack.common.ts');

module.exports = mergeDev(commonDev, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
  },
});
