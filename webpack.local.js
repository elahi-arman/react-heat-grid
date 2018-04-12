const webpack = require('webpack');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const libraryName = require('./package.json').name;

module.exports = {
    entry: path.join(__dirname, "./src/index.js"),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'HeatGrid.js',
        library: libraryName,
        libraryTarget: 'var',
        publicPath: '/dist/'
    },
    plugins: [
      new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
    ],
    module: {
        rules : [
          {
           test: /\.css$/,
           use: [
             MiniCssExtractPlugin.loader,
             "css-loader"
           ]
         },
          {
              test: /\.(js|jsx)$/,
              use: ["babel-loader"],
              include: path.resolve(__dirname, "src"),
              exclude: /node_modules/,
          }
        ]
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react')
        }
    },
    externals: {
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        }
    }
};
