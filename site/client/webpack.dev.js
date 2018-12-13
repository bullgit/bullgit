const {readFileSync} = require("fs");
const config = require("@bullgit/config-webpack/development");
const merge = require("webpack-merge");
const path = require("path");

module.exports = async (env, argv) => {
	return merge(await config(env, argv), {
		entry: {
			bundle: path.resolve(__dirname, "src/index.tsx")
		},
		devServer: {
			https: {
				key: readFileSync(path.resolve(__dirname, "config/key.pem"), "utf-8"),
				cert: readFileSync(path.resolve(__dirname, "config/cert.pem"), "utf-8")
			}
		}
	});
};
