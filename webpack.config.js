const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './app/app.js',
        vendor: ['react', 'react-dom']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loaders: ['babel-loader']
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader!postcss-loader!sass-loader'
            })
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader'
            })
        }, {
            test: /\.svg$/,
            loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=static/[name].[hash].[ext]'
        }, {
            test: /\.woff$/,
            loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=static/[name].[hash].[ext]'
        }, {
            test: /\.woff2$/,
            loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=static/[name].[hash].[ext]'
        }, {
            test: /\.[ot]tf$/,
            loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=static/[name].[hash].[ext]'
        }, {
            test: /\.eot$/,
            loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=static/[name].[hash].[ext]'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            verbose: true
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
            minChunks: 'Infinity'
        })
    ]
};
