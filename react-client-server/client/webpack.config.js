const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const production = process.env.NODE_ENV = "production";

module.exports = {
    entry: { myAppName: path.resolve(__dirname, "./src/index.js")},
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: production ? '[name].[contenthash].js' : '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/,
                use: [
                    production ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.s(a|c)ss$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin.loader : "style-loader",
                    {
                        options: {
                            modules: true,
                            sourceMap: !production
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: !production
                        }
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
        ]
    },

    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".scss", ".css"]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "Webpack and React",
            template: "./public/index.html",
            favicon: "./public/favicon.ico",
        }),
        new MiniCssExtractPlugin({
            filename: production ? "[name].[contenthash].css" : "[name].css",
        })
    ],
    devServer: {
        port: 3600,
        hot: true
    },
    mode: production ? "production" : "development",
    optimization: {
        minimize: false,
    },
}