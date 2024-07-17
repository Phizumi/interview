const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { Compilation } = require('webpack');


class MyWebpackPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap('MyWebpackPlugin', (compilation) => {
      compilation.hooks.processAssets.tapPromise({
        name: 'MyWebpackPlugin',
        stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
      }, async (assets) => {
        for (const name in assets) {
          if (name.endsWith('.js')) {
            const content = assets[name].source();
            const withoutComments = content.replace(/\/\*[\s\S]*?\*\//g, '')
            assets[name] = {
              source: () => withoutComments,
              size: () => withoutComments.length
            }
          }
        }
      });
    });
  }
}

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'dist/'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Webpack Plugin sample',
      meta: {
        viewport: 'width=device-width, initial-scale=1'
      },
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'share.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "" },
      ],
    }),
    new MyWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.md$/i,
        use: [
          'html-loader',
          './loaders/md-loader'
        ]
      }
    ]
  }
}