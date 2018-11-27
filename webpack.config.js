const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.js'),
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        watchContentBase: true,
        // publicPath: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/env',
                        '@babel/react'
                    ]
                }
            },
            {
                test: /\.css$/,
                loader: [ 'style-loader', 'css-loader',]
            }
        ]
    }
}