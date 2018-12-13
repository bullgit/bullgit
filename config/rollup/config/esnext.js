const path = require("path");
const babel = require("rollup-plugin-babel");

module.exports = () => {
	const cwd = process.cwd();
	const pkg = require(path.resolve(cwd, "package.json"));
	return [
		{
			input: "src/index.js",
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
			plugins: [babel()]
		}
	]
};
