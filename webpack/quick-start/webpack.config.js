const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  mode: 'none',
  devServer: {
    port: 8080,
    compress: true,
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 5 * 1024, // <= 5KB
            esModule: false, // required
          },
        },
        // css-loader6以上版本。
        // 对引入背景图片的url解析方式不一样，导致生成了两个图片
        // 一个正常由 file-loader 解析生成，一个仅由 css--loader 解析引入
        type: 'javascript/auto', // required
      },
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.html'
    // })
  ]
}