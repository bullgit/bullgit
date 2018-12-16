import {createGlobalStyle, css} from "@bullgit/styled-components";

export const GlobalStyle = createGlobalStyle`
	html {
		position: relative;
		line-height: 1.5;
		font-size: 1em;
		text-size-adjust: none;
	}
	body {
		margin: 0;
		font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	}
	pre, code {
		font-family: "Source Code Pro", monospace;
	}
	*, *::before, *::after {
		box-sizing: border-box;
		line-height: inherit;
	}
	[data-bullgit-root] {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		${({theme: {colors}}) => css`
			background: ${colors.background.medium};
			color: #000;
		`};
	}

`;
