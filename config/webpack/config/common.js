const globby = require("globby");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const styled = require("styled-components");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require("path");

module.exports = async (env, argv) => {
	const cwd = process.cwd();
	const TEMP = path.resolve(cwd);
	const SRC = path.resolve(cwd, "src");
	const LIB = path.resolve(cwd, "lib/src");
	const PUBLIC = path.resolve(cwd, "public");
	return {
		entry: {
			bundle: path.resolve(SRC, "index.tsx")
		},
		output: {
			path: PUBLIC,
			filename: "[name].js",
			publicPath: "/",
			libraryTarget: "umd"
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".jsx"]
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					loader: "babel-loader"
				},
				{
					test: /\.tsx?$/,
					use: [
						{
							loader: "babel-loader"
						}
					]
				}
			]
		},
		plugins: [
			...((await globby(path.resolve(TEMP, "html/*.html"), { cwd })) || []).map(template => {
				const { base: filename } = path.parse(template);
				const alwaysWriteToDisk = true;
				const { default: App } = require(path.resolve(LIB, "app.js"));
				const sheet = new styled.ServerStyleSheet();
				const component = React.createElement(App);
				const app = ReactDOMServer.renderToString((component));
				const head = sheet.getStyleTags();
				const templateParameters = {
					app,
					head
				};
				return new HtmlWebpackPlugin({
					alwaysWriteToDisk,
					filename,
					template,
					templateParameters
				});
			}),
			new HtmlWebpackHarddiskPlugin()
		]
	};
};
