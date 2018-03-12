var webpack = require('webpack')

module.exports = {
    entry: './client/js/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/client/build'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery'
        })]
};