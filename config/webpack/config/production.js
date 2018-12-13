const merge = require("webpack-merge");
const common = require("./common.js");

module.exports = async (env, argv) => {
	return merge(await common(env, argv), {
		mode: "production",
		devtool: false
	});
};

