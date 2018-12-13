import members from "../../../data/gitches.json";

export type LatLon = [number, number];
export interface Member {
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

export type Members = Member[]

// const gitches = (members as Members);
const gitches = members;

export {gitches};
