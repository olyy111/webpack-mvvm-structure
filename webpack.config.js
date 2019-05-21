var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path')
module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'static/js/[name].js',
        publicPath: '/'
    },
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin()]
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
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'static/css/[name].css',
            chunkFilename: '[id].css',
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        proxy: {
            '/hello': 'http://localhost:9898'
        }
    }
    
}