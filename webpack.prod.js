const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          output: {
            comments: false,
          },
          compress: {
            drop_debugger: true,
            drop_console: true,
            pure_funcs: ['console.log', 'debugger'] // 移除console、debugger
          }
        }
      })
    ],
    splitChunks: {
      automaticNameDelimiter: '-',
      cacheGroups: {
        verdor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          minSine: 0,
          priority: 1,
          enforce: true,
          reuseExistingChunk: true
        }
      },
      chunks: 'all'
    }
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
})