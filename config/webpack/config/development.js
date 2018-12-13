const merge = require("webpack-merge");
const common = require("./common.js");

module.exports = async (env, argv) => {
	return merge(await common(env, argv), {
		devtool: "inline-source-map",
		devServer: {
			host: "localhost",
			hot: true,
			inline: true,
			port: 3000
		},
		mode: "development"
	});
}
