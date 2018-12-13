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
				}
			],
			plugins: [babel(), typescript()]
		},
		{
			input: "src/bullgit.ts",
			external: [
				...Object.keys(pkg.dependencies || {}),
				...Object.keys(pkg.peerDependencies || {})
			],
			output: [
				{
					file: `dist/${pkg.bin.bullgit}`,
					format: "cjs"
				}
			],
			plugins: [babel(), typescript()]
		},
		{
			input: "src/gitch.ts",
			external: [
				...Object.keys(pkg.dependencies || {}),
				...Object.keys(pkg.peerDependencies || {})
			],
			output: [
				{
					file: `dist/${pkg.bin.gitch}`,
					format: "cjs"
				}
			],
			plugins: [babel(), typescript()]
		}
	]
};
