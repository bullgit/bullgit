/**
 * @see https://github.com/bullgit/bullgit.github.io/blob/6ef77bbe02e4ab8f11f48a0be1a706cd4615d79e/assets/css/style.scss#L24-L32
 * $color--main: #1393d5;
 * $color--light: #f1f1f1;
 * $color--target: #ff6347;
 * $color--background: #F3F4F7;
 * $color--dark-background: #444;
 * $color--darker-background: #222;
 * $color--light-background: #fff;
 */

export interface BackgroundColors {
	dark: string;
	darker: string;
	light: string;
	medium: string;
}

export interface Colors {
	main: string;
	light: string;
	background: BackgroundColors;
}

export interface Theme {
	colors: Colors;
}

export const theme: Theme = {
	colors: {
		background: {
			dark: "#444444",
			darker: "#222222",
			light: "#ffffff",
			medium: "#F3F4F7"
		},
		light: "#f1f1f1",
		main: "#1393d5"
	}
};
