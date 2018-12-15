module.exports = {
	presets: ["@babel/preset-env"],
	plugins: [
		["@babel/plugin-proposal-decorators", {legacy: true}],
		["@babel/plugin-proposal-class-properties", {loose: true}],
		"@babel/plugin-proposal-object-rest-spread",
		[
			"transform-inline-environment-variables",
			{
				include: ["NODE_ENV"]
			}
		]
	]
};
