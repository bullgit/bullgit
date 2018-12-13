import {createGlobalStyle, css} from "@bullgit/styled-components";

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		font-family: sans-serif;
		${({theme: {colors}}) => css`
			background: linear-gradient(
					-160deg,
					${colors.background.darker} 25%,
					${colors.background.dark} 75%
				)
				fixed;
			color: #fff;
		`};
	}
	* {
		box-sizing: border-box;
	}
`;
