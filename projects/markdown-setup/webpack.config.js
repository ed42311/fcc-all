const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + '/src/index.html',
	filename: 'index.html',
	inject: 'body'
});
const extractTextPluginConfig = new ExtractTextPlugin({
	filename: 'styles.css',
	 allChunks: true
});

module.exports = {
	context: resolve(__dirname, 'src'),
	 entry: [
		 './index.js'
	 ],
  output: {
	  filename: 'main.js',
		path: __dirname + '/build'
  },
	devtool: 'source-map',
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
		HTMLWebpackPluginConfig,
		new webpack.NamedModulesPlugin(),
    extractTextPluginConfig
	]
};
