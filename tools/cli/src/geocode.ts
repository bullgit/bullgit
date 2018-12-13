import NodeGeocoder from "node-geocoder";

const options = {
	apiKey: process.env.LOCATIONIQ_API_KEY,
	formatter: null,
	httpAdapter: 'https',
	provider: 'locationiq',
};

export interface Geodata {
	[key: string]: any
}

export type Geocoder = (address: string) => Promise<Geodata>

export const geocoder = NodeGeocoder(options);
