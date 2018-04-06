const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
   devtool: 'inline-source-map',
   devServer: {
      contentBase: './dist'
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
     rules: [
       {
         test: /\.scss$/,
         use: [{
            loader: "style-loader"
         }, {
            loader: "css-loader", options: {
               sourceMap: true
            }
         }, {
            loader: "resolve-url-loader"
         }, {
            loader: "sass-loader", options: {
               sourceMap: true
            }
         }]
       },
       {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }
          }
        ]
      },
       { test: /\.(js)$/, use: 'babel-loader' }
     ]
   },
   mode: "development"
};