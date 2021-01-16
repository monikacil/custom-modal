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
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
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
            filename: "index.html",
            template: "src/index.html"
        })
    ]
}
