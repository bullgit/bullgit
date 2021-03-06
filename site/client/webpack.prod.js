const config = require("@bullgit/config-webpack/production");
const merge = require("webpack-merge");
const path = require("path");
const {plugins} = require("./webpack.common");

module.exports = async (env, argv) => {
	return merge(await config(env, argv), {
		entry: {
			bundle: path.resolve(__dirname, "src/index.tsx")
		},
		plugins
	});
};
