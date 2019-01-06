
/**
 * @typedef {string} Url
 */
export type Url = string;

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

export const array = (length: number): number[] =>
	Array(length)
		.fill(0)
		.map((x, i: number) => i);

