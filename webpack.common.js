const path = require('path');

module.exports = {
	entry: './src/index.ts',
	externals: {
		'crypto': 'crypto'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.pug$/,
				include: path.join(__dirname, 'src'),
				loaders: [ 'pug-loader' ]
			}
		]
	},
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
};
