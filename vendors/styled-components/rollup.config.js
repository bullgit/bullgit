const pkg = require("./package.json");
const babel = require("rollup-plugin-babel");
const typescript = require("rollup-plugin-typescript2");

module.exports = () => {
	return [
		{
			input: "src/index.ts",
			external: [
				...Object.keys(pkg.dependencies || {}),
				...Object.keys(pkg.peerDependencies || {})
			],
			output: [
				{
					file: `dist/${pkg.main}`,
					format: "cjs"
				},
				{
					file: pkg.module,
					format: "es"
				}
			],
			plugins: [babel(), typescript()]
		}
	]
};
