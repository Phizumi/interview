const path = require('path');

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
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