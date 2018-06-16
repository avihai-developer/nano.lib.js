const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	optimization: {
		minimize: false
	},
	output: {
		library: 'NanoLib',
		libraryTarget: 'umd',
		globalObject: 'this',
		libraryExport: 'default',
		filename: 'nano-lib.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template : './src/index.pug',
			inject   : true
		})
	]
});