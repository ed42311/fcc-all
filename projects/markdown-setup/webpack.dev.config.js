const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates

        './components/index.js'
        // the entry point of our app
    ],
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'build'),
        publicPath: '/'
        // necessary for HMR to know where to load the hot update chunks
    },
    devtool: 'source-map',
    devServer: {
        hot: true,
        contentBase: resolve(__dirname),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: ['babel-loader',],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader"
                            },
                            {
                                loader: "sass-loader"
                            }
                        ],
                        fallback: "style-loader"
                    }
                ))
            },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin({filename: 'styles.css', allChunks: true})
    ],
};
