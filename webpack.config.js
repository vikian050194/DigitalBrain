const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = "development";

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./client/js/index.jsx", "bootstrap-loader/extractStyles", "./client/build.js"],
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                },
                resolve: {
                    extensions: [".js", ".jsx"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                loader: "url-loader",
                options: {
                    limit: 1024,
                    name: "[name].[ext]",
                    outputPath: "/",
                    publicPath: "/"
                }
            },
            {
                test: /\.(html)$/,
                loader: "url-loader",
                options: {
                    limit: 1024,
                    name: "[name].[ext]",
                    outputPath: "/",
                    publicPath: "/"
                }
            }
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "client", "build")
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: "development",
            DEBUG: true
        })
    ]
};