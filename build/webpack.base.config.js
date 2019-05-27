const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const path = require('path')
module.exports = {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: 'static/js/[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [{loader: MiniCssExtractPlugin.loader}, 'css-loader','sass-loader']
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'static/imgs/[hash].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.js', '.css', '.scss'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'static/css/[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new VueLoaderPlugin(),
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: ['You application is running here http://localhost:3000'],
                notes: ['Some additional notes to be displayed upon successful compilation']
            },
        })
    ]
}