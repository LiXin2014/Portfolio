const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource'
              }
        ]
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    devtool:"inline-source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}