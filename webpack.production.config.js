const merge = require("webpack-merge");
const common = require("./webpack.config.js");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

process.env.NODE_ENV = "production";

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimizer: [new TerserPlugin({
            sourceMap: true
        })]
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: "production",
            DEBUG: false
        })
    ]
});