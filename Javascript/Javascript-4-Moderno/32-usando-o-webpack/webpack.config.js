const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// const path = require('path')
module.exports = {
    entry: {
        index: './src/index.js'
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
    // output: {
    //     path: path.resolve(__dirname, 'public'),
    //     filename: '[name].bundle.min.js'
    // }
}