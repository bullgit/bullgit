import fs from "fs";
import mkdirp from "mkdirp";
import path from "path";
import pify from "pify";

const mkdir = pify(mkdirp);
const {writeFile} = pify(fs);

export const writeToFile = async (file, content) => {
	const {dir} = path.parse(file);
	await mkdir(dir);
	await writeFile(file, content);
};
export const stringify = (json: any[]) => JSON.stringify(json, null, 2);
