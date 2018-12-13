import {theme, ThemeProvider} from "@bullgit/styled-components";
import React from "react";
import {hot} from "react-hot-loader";
import {Gitches, Repos} from "./organisms";
import {GlobalStyle} from "./style";

/**
 * @todo add react-router
 */
class App extends React.Component {
	public render() {
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<GlobalStyle />
					<Repos />
					<Gitches />
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

export default hot(module)(App);
