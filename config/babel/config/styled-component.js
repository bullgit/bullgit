module.exports = {
	extends: "./react",
	presets: [
		[
			"styled-components",
			{
				ssr: true,
				displayName: false
			}
		]
	],
	env: {
		development: {
			plugins: [
				"react-hot-loader/babel",
				[
					"styled-components",
					{
						ssr: true,
						displayName: true
					}
				]
			]
		}
	}
};
