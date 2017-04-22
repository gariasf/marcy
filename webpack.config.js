const path              = require('path');
const webpack           = require('webpack');
const minimist          = require('minimist')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commandline = minimist(process.argv.slice(2));

module.exports = {
  target: 'node',
  context: path.resolve(__dirname, './src/web-app'),
  entry: './js/main.js',
  output: {
    path: path.resolve(__dirname, './src/web-app/dist/'),
    publicPath: commandline.env === 'production' ? "./" : '/',
    filename: 'marcy.bundle.js',
  },
    devServer: {
            contentBase: path.resolve(__dirname, './src/web-app'),
            port: 8080,
            historyApiFallback: true,
            hot: false,
            quiet: false
    },
    module: {
        loaders: [
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/
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
        },
        {
                test: /\.(eot|woff|woff2|ttf)([?]?.*)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    },
                }],
            },
        ]
    },
    resolve: {
        extensions: ['.vue', '.js', '.scss', '.html'],
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'media', to: 'media' }
        ]),
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
