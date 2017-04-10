const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, './src/web-app'),
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, './src/web-app/dist/'),
    publicPath: "/",
    filename: 'marcy.bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src/web-app'),
    port: 8080,
    historyApiFallback: true,
    hot: false,
    quiet: true
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader" // translates CSS into CommonJS
          },{
            loader: "postcss-loader" // Process CSS (autoprefix)
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }]
        })

      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.vue', '.js', '.scss', '.html'],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true
      },
      hash: true,
      template: './index.html'
    })
  ]
};
