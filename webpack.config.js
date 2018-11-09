const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./app/app.tsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
      },
      {
        test: /\.ts(x)?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './.',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './.',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/[name].[hash].[ext]',
              publicPath: './.',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    occurrenceOrder: true,
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CleanWebpackPlugin(['./dist'], {
      verbose: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FaviconsWebpackPlugin('./favicon.png'),
  ],
};
