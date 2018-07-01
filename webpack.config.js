const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const appJs = env ? env.APP_JS_NAME : "app.js";
  return {
    devtool: 'source-map',
    entry: {
      'app': [
        './src/index'
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        APP_JS_NAME: appJs,
        template: 'index.html',
        inject: false
      })
    ],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: appJs
    },
    module: {
      rules: [
        {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
        {test: /\.css$/, exclude: /node_modules/, loader: 'style-loader'},
        {
          test: /\.css$/, exclude: /node_modules/, loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        }, {
          test: /\/Root\.js$/, // regex to match files to receive react-hot-loader functionality
          loader: require.resolve('react-hot-loader-loader'),
        }
      ]
    }
  };
};

