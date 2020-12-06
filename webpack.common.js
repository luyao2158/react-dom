const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/, // 一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx的文件（必须）
      exclude: /node_modules/, // 屏蔽不需要处理的文件（文件夹）（可选）
      loader: ['babel-loader'], // loader的名称（必须）， tsLoader用于将ts的一些特性转换为js兼容的语法
    }, {
      test: /\.css$/,
      use: ['style-loaser', 'css-loader'], // style-loader创建<style></style>, css-loader转换css
    }, {
      test: /.less$/,
      use: ['style.loader', 'css-loader', 'less-loader'], // 编译less -> css
    }, {
      test: /\(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000, // uel-loader包含file-loader，这里不是file-loader，小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
        name: 'static/img/[name].[hash:7].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000, // 小于10000B的图片base64的方式引入，大于10000B的图片路径的方式导入
        name: 'static/fonts/[name].[hash:7].[ext]'
      }
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // 解析扩展。（当我们通过路径导入文件，找不到该文件时，会尝试加入这些后缀继续寻找文件）
    alias: {
      '@': path.join(__dirname, '..', 'src')
    }
  }
}