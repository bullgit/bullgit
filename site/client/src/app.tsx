import {styled, theme, ThemeProvider} from "@bullgit/styled-components";
import React from "react";
import {hot} from "react-hot-loader";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import {Logo} from "./atoms/logo";

import GridOverlay from "./components/grid";
import {defaultGrid} from "./components/grid-system/config";
import Header from "./components/header";
import Icon from "./components/icon";
import {List, ListItem} from "./components/list";
import Main from "./components/main";
import Sidebar from "./components/sidebar";

import {routes} from "./routes";
import {GlobalStyle} from "./style";
import {InlineLink} from "./components/links";

const Menu = () => {
	return (
		<List flatList={true} removeGap={true}>
			<ListItem>
				<InlineLink target="_blank" href={"https://twitter.com/bullgit"}>
					<Icon iconName="twitter" /> Twitter
				</InlineLink>
			</ListItem>
			<ListItem>
				<InlineLink target="_blank" href={"https://codepen.io/bullgit"}>
					<Icon iconName="codepen"/> CodePen
				</InlineLink>
			</ListItem>
			<ListItem>
				<InlineLink target="_blank" href={"https://github.com/bullgit"}>
					<Icon iconName="github"/> GitHub
				</InlineLink>
			</ListItem>
			<ListItem>
				<InlineLink target="_blank" href={"https://il.bullg.it/"}>
					<Icon iconName="github" /> Issues
				</InlineLink>
			</ListItem>
			<ListItem>
				<InlineLink target="_blank" href={"https://chat.bullg.it/"}>
					<Icon iconName="slack"/> Chat
				</InlineLink>
			</ListItem>
			<ListItem>
				<InlineLink target="_blank" href={"https://bullg.it/media"}>
					Media
				</InlineLink>
			</ListItem>
		</List>
	);
};

class App extends React.Component {
	public render() {
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<GridOverlay {...defaultGrid} colorAlpha={0.1} />

					<GlobalStyle />
					<React.Fragment>
						<Header>
							<nav>
								<InlineLink as={Link} to={"/"}>
									Home
								</InlineLink>
								<InlineLink as={Link} to={"/repos"}>Repos</InlineLink>
							</nav>
						</Header>
						<Sidebar>
							<Menu/>
						</Sidebar>
						<Main {...defaultGrid}>
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
						</Main>
					</React.Fragment>
					<footer>
						<Link to={"/coc"}>Code of Conduct</Link>
						<Link to={"/map"}>Bullgiverse</Link>
						<a target="_blank" href={"https://github.com/bullgit/wiki/wiki"}>
							Wiki
						</a>
					</footer>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

export default hot(module)(App);
