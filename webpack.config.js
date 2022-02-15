'use strict'

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const externalCSS = [{
  loader: MiniCssExtractPlugin.loader
}, {
  loader: 'css-loader',
  options: {
    // 1st option is to comment out the modules block to fix HMR
    modules: {
      mode: 'icss'
    }
  }
}]

// 2nd option is to include CSS into the JS bundle
const internalCSS = [{
  loader: 'style-loader'
}, {
  loader: 'css-loader',
  options: {
    modules: {
      mode: 'icss'
    }
  }
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
