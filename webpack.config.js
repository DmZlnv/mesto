const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/pages/index.js',
  },
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    open: true,
  },
  module: {
    rules:  [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/',
    },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
      test: /\.css$/,
      use:  [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          }
        },
        'postcss-loader'
      ],
    }]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: './src/index.html'
      }
    ),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ]
}
