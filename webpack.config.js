const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{
				test: /\.s(a|c)ss$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			template: 'app/index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css',
		})
	]
}
