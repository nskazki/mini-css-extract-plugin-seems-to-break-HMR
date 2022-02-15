'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const internalCSS = [{
  loader: 'style-loader'
}, {
  loader: 'css-loader'
}]

const externalCSS = [{
  loader: MiniCssExtractPlugin.loader
}, {
  loader: 'css-loader'
}]

module.exports = {
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.css$/,
      use: externalCSS
    }]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
}
