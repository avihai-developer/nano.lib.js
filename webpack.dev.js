const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	optimization: {
		minimize: false
	},
	output: {
		library: 'NanoLib',
		filename: 'nano-lib.js',
		path: path.resolve(__dirname, 'dist')
	}
});