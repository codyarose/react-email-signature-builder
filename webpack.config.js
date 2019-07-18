const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
		]
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.html',
			filename: 'index.html',
		})
	]
}
