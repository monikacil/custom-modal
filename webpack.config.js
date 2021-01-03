'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.min.js",
        path: path.resolve(__dirname, "./dist")
    },
    watch: false,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/i,
                loader: "css-loader"
            },
            {
                test: /\.html$/i,
                loader: 'html-loader'
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Demo",
            filename: "index.html",
            template: "dev/index.html",
            inject: true
        })
    ]
}