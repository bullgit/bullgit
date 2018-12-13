const globby = require("globby");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const React = require("react");
const {StaticRouter} = require('react-router');
const ReactDOMServer = require("react-dom/server");
const styled = require("styled-components");

module.exports = async (env, argv) => {
	const cwd = process.cwd();
	const CWD = path.resolve(cwd);
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
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader'],
				}
			]
		},
		plugins: [
			...((() => {
				const template = path.resolve(CWD, "html/index.html");
				const { base: filename } = path.parse(template);
				const alwaysWriteToDisk = true;
				const { default: App } = require(path.resolve(LIB, "app.js"));
				const sheet = new styled.ServerStyleSheet();
				const appRoutes = path.resolve(CWD, "lib/src/routes.js")
				const {routes} = require(appRoutes);
				const pages = routes.map(page => {
					const component = React.createElement(StaticRouter, {
							location: page.location,
							context: {}
						},
						React.createElement(App));
					const app = ReactDOMServer.renderToString((component));
					const head = sheet.getStyleTags();
					const templateParameters = {
						app,
						head
					};
					const outputFile = path.join(page.location, filename).replace(/^\//, "");
					return new HtmlWebpackPlugin({
						alwaysWriteToDisk,
						filename: outputFile,
						template,
						templateParameters
					});
				});
				return pages;
			})()),
			new HtmlWebpackHarddiskPlugin()
		]
	};
};
