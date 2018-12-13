const merge = require("webpack-merge");
const common = require("./common.js");

module.exports = async (env, argv) => {
	return merge(await common(env, argv), {
		mode: "production",
		devtool: false,
		optimization: {
			splitChunks: {
				chunks: "all",
				minSize: 30000,
				maxSize: 300000,
				minChunks: 1,
				maxAsyncRequests: 5,
				maxInitialRequests: 3,
				automaticNameDelimiter: "~",
				name: true,
				cacheGroups: {
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						priority: -10
					},
					default: {
						minChunks: 2,
						priority: -20,
						reuseExistingChunk: true
					}
				}
			}
		},
	});
};

