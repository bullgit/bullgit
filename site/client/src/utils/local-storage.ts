import {isClient} from "./helpers";

class LocalStorage {
	private readonly id: string;
	public constructor(id) {
		this.id = id;
	}
	public setItem = (key: string, value: string) => {
		const client = () => {
			return localStorage.setItem(this.withPrefix(key), value);
		};
		const server = () => {
			return undefined;
		};
		return isClient(global, client, server);
	};
	public getItem = (key: string) => {
		const client = () => localStorage.getItem(this.withPrefix(key));
		const server = () => undefined;
		return isClient(global, client, server);
	};
	public removeItem = (key: string) => {
		const client = () => localStorage.removeItem(this.withPrefix(key));
		const server = () => undefined;
		return isClient(global, client, server);
	};
	private withPrefix = (key: string): string => `${this.id}__${key}`;
}

export default LocalStorage;
