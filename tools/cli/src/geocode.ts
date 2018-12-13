import NodeGeocoder from "node-geocoder";

const options = {
	provider: 'locationiq',
	httpAdapter: 'https',
	apiKey: process.env.LOCATIONIQ_API_KEY,
	formatter: null
};

export interface Geodata {
	[key: string]: any
}

export type Geocoder = (adress: string) => Promise<Geodata>

export const geocoder = NodeGeocoder(options);
