const {resolve} = require('path');
const webpack = require('webpack');
const DefinePlugin = webpack.DefinePlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        './components/index.js'
    ],
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'build')
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: ['babel-loader',],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
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
                )
            }
        ]
    },
    plugins: [
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new UglifyJsPlugin({
            sourceMap: false
        }),
        new ExtractTextPlugin({filename: 'styles.css', allChunks: true})
    ],
};
