import fs from "fs";
import github from "octonode";
import {stringify, writeToFile} from "./utils";

export type LatLon = [number, number];

export interface Gitch {
	name: string;
	title?: string;
	email?: string;
	gravatar?: string;
	latlon?: LatLon;
	url?: string;
	github: string;
	codepen?: string;
	twitter?: string;
}

export const compareProps = (prop: string, oldGitch: Gitch, newGitch: Gitch) =>
	oldGitch[prop] &&
	(oldGitch[prop].toLowerCase() === newGitch[prop] && newGitch[prop].toLowerCase());

export const compareGitch = (oldGitch: Gitch, newGitch: Gitch) => {
	if (compareProps("email", oldGitch, newGitch)) {
		return true;
	}
	if (compareProps("codepen", oldGitch, newGitch)) {
		return true;
	}
	if (compareProps("twitter", oldGitch, newGitch)) {
		return true;
	}
	if (compareProps("github", oldGitch, newGitch)) {
		return true;
	}
	return compareProps("github", oldGitch, newGitch);
};

export const getOldData = file => {
	return fs.existsSync(file) ? require(file) : [];
};

export const findGitch = (data: Gitch[], gitch) => data.find(entry => compareGitch(entry, gitch));

export const updateGitch = (data: Gitch[], gitch) =>
	data.map(oldGitch => (!compareGitch(oldGitch, gitch) ? oldGitch : gitch));


export const getRepos = async (page = 1) => {
	const client = github.client();
	const bullgitOnGithub = client.user("bullgit");
	const [repos] = await bullgitOnGithub.reposAsync({page, per_page: 100});
	return repos;
};

export const writeRepos = async outFile => {
	const repos = [...(await getRepos()), ...(await getRepos(2))];
	await writeToFile(outFile, stringify(repos));
};
