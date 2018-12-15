import {createGlobalStyle, css} from "@bullgit/styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: sans-serif;
		min-height: 100vh;
		${({theme: {colors}}) => css`
			background: ${colors.background.medium};
			color: #000;
		`};
	}
	[data-bullgit-root] {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	* {
		box-sizing: border-box;
	}
`;
