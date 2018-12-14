import {createGlobalStyle, css} from "@bullgit/styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: sans-serif;
		${({theme: {colors}}) => css`
			background: ${colors.background.medium};
			color: #000;
		`};
	}
	* {
		box-sizing: border-box;
	}
`;
