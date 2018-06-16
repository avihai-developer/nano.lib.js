const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
	mode: 'production',
	output: {
		library: 'NanoLib',
		libraryTarget: 'umd',
		globalObject: 'this',
		libraryExport: 'default',
		filename: 'nano-lib.min.js',
		path: path.resolve(__dirname, 'dist')
	}
});