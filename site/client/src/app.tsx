import {css, styled, theme, ThemeProvider} from "@bullgit/styled-components";
import React from "react";
import {hot} from "react-hot-loader";
import {Route, Switch} from "react-router";
import {routes} from "./routes";
import {GlobalStyle} from "./style";

class App extends React.Component {
	public render() {
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<GlobalStyle />
					<Switch>
						{routes.map(route => (
							<Route
								key={route.location}
								exact={true}
								path={route.location}
								component={route.component}
							/>
						))}
					</Switch>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

export default hot(module)(App);
