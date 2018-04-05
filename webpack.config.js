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
         template: 'index.html'
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
       { test: /\.(js)$/, use: 'babel-loader' }
     ]
   },
   mode: "development"
};