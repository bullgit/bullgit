/**
 * @todo move elements @bullgit/icons
 */


export interface IconMap {
	clusterMarker: string;
	codepen: string;
	email: string;
	eye: string;
	github: string;
	link: string;
	marker: string;
	slack: string;
	star: string;
	twitter: string;
}
export type IconName = keyof IconMap;

export const icons: IconMap = {
	clusterMarker: "M14,11.5A2.5,2.5 0 0,0 16.5,9A2.5,2.5 0 0,0 14,6.5A2.5,2.5 0 0,0 11.5,9A2.5,2.5 0 0,0 14,11.5M14,2C17.86,2 21,5.13 21,9C21,14.25 14,22 14,22C14,22 7,14.25 7,9A7,7 0 0,1 14,2M5,9C5,13.5 10.08,19.66 11,20.81L10,22C10,22 3,14.25 3,9C3,5.83 5.11,3.15 8,2.29C6.16,3.94 5,6.33 5,9Z",
	codepen:
		"M15.09 12L12 14.08v.01L8.91 12 12 9.92 15.09 12M12 2a.93.93 0 0 0-.47.15L2.5 8.11c-.23.11-.41.32-.5.56v6.25c0 .41 0 .41.15.61l9.38 6.33c.14.1.31.14.47.14.16 0 .33-.05.47-.15l9.38-6.35c.15-.17.15-.17.15-.58V8.67a1.04 1.04 0 0 0-.5-.57l-9.03-5.95A.843.843 0 0 0 12 2m4.58 11l3.01 2.04-6.76 4.56v-4.07L16.58 13m3.11-4.1L16.58 11l-3.75-2.53V4.38l6.86 4.52m.64 1.57v3.06L18.07 12l2.26-1.53M7.42 13l3.75 2.54v4.06l-6.76-4.56L7.42 13M4.31 8.9l6.86-4.51V8.5L7.42 11 4.31 8.9m-.64 1.6L5.93 12l-2.26 1.54V10.5z",
	email:
		"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",
	eye:
		"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z",
	github:
		"M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z",
	link:
		"M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z",
	marker: "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z",
	slack: "M10.23,11.16L12.91,10.27L13.77,12.84L11.09,13.73L10.23,11.16M17.69,13.71C18.23,13.53 18.5,12.94 18.34,12.4C18.16,11.86 17.57,11.56 17.03,11.75L15.73,12.18L14.87,9.61L16.17,9.17C16.71,9 17,8.4 16.82,7.86C16.64,7.32 16.05,7 15.5,7.21L14.21,7.64L13.76,6.3C13.58,5.76 13,5.46 12.45,5.65C11.91,5.83 11.62,6.42 11.8,6.96L12.25,8.3L9.57,9.19L9.12,7.85C8.94,7.31 8.36,7 7.81,7.2C7.27,7.38 7,7.97 7.16,8.5L7.61,9.85L6.31,10.29C5.77,10.47 5.5,11.06 5.66,11.6C5.8,12 6.19,12.3 6.61,12.31L6.97,12.25L8.27,11.82L9.13,14.39L7.83,14.83C7.29,15 7,15.6 7.18,16.14C7.32,16.56 7.71,16.84 8.13,16.85L8.5,16.79L9.79,16.36L10.24,17.7C10.38,18.13 10.77,18.4 11.19,18.41L11.55,18.35C12.09,18.17 12.38,17.59 12.2,17.04L11.75,15.7L14.43,14.81L14.88,16.15C15,16.57 15.41,16.84 15.83,16.85L16.19,16.8C16.73,16.62 17,16.03 16.84,15.5L16.39,14.15L17.69,13.71M21.17,9.25C23.23,16.12 21.62,19.1 14.75,21.17C7.88,23.23 4.9,21.62 2.83,14.75C0.77,7.88 2.38,4.9 9.25,2.83C16.12,0.77 19.1,2.38 21.17,9.25Z",
	star:
		"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",
	twitter:
		"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
};
