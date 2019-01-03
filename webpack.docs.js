const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './demo/main.js'),
    output: {
        path: path.resolve(__dirname, './docs/demo/'),
        filename: 'particles.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './demo/index.html'),
        }),
    ],
    mode: 'production',
};
