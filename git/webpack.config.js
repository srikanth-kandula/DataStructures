var path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
    typeScriptFiles: './src/data-structures/singly-linked-lists.ts'
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: '/node_modules/, /JS/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/env'
              ]
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/,
      }
    ]
  }
};