/**
 * @typedef {[key: string]: any} IObject
 */
export interface IObject<T> {
	[key: string]: any;
}

/**
 * @typedef {[key: string]: any} IJSONPostBody
 */
export interface IJSONPostBody {
	[key: string]: any;
}

/**
 * @typedef {string} Url
 */
export type Url = string;

/**
 *
 * @param {string} url
 * @param {IJSONPostBody} body
 * @returns {Promise}
 */
export const postJSON = (url: Url, body: IJSONPostBody): Promise<{}> =>
	fetch(url, {
		body: JSON.stringify(body),
		headers: {"Content-Type": "application/json"},
		method: "POST"
	}).then(response => response.json());

/**
 *
 * @param {string} url
 * @returns {Promise}
 */
export const getJSON = (url: Url) => fetch(url, {method: "GET"}).then(response => response.json());

/**
 * @typedef {[key: string]: any} IStorage
 */
export interface IStorage {
	[key: string]: any;
}

/**
 *
 * @param {string[]} items
 * @returns {IStorage}
 */
export const getStorage = (items: string[]): IStorage =>
	items
		.map((item: string): IStorage => ({[item]: sessionStorage.getItem(item)}))
		.reduce((previous: IStorage, current: IStorage): IStorage => ({...previous, ...current}), {});

/**
 * @typedef {(window: Window) => any} ClientCallback
 */
export type ClientCallback = (window: Window) => any;

/**
 * @typedef {(window: Global) => any} ServerCallback
 */
export type ServerCallback = (global: NodeJS.Global) => any;

/**
 *
 * @param {Global|Window} global
 * @param {ClientCallback} clientCallback
 * @param {ServerCallback} serverCallback
 */
export const isClient = (global: any, clientCallback: ClientCallback, serverCallback: ServerCallback) =>
	"window" in global ? clientCallback(global.window) : serverCallback(global);

export const leftPad = (n: number, length: number) => `00000000${n}`.substr(length * -1);

export const array = (length: number): number[] =>
	Array(length)
		.fill(0)
		.map((x, i: number) => i);

export const randomRange = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
