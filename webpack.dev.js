const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devServer = require('webpack-dev-server');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-sorce-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.relative(__dirname, './dist/index.html'),
      template: 'index.html',
    })
  ],
  devServer: {
    historyApiFallbacK: true, // 当找不到路径的时候默认加载index.html文件
    hot: true,
    hotOnly: true,
    contentBase: false, // 告诉服务器从哪里提供内容，只有在你想要提供静态文件时才需要
    compress: true, // 一切服务取用gzip压缩
    host: '127.0.0.1',
    port: 8000,
    open: true,
    inline: true,
    // publicPath: '/', // 访问资源加前缀
  }
})