var path = require("path");

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, "output"),
		filename: "bundle.js",
	},
	devServer: {
		contentBase: path.resolve(__dirname, "output"),
		port: 8080,
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: path.join(__dirname,"node_modules"),
				options: {
					presets: ["env","react"]
				}
			}
		]
	},
	mode: "development",
}