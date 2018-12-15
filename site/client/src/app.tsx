import {css, styled, theme, ThemeProvider} from "@bullgit/styled-components";
import React from "react";
import {hot} from "react-hot-loader";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import {Logo} from "./atoms/logo";

import GridOverlay from "./components/grid";
import {Box, BoxAYX, Column, Grid, Row} from "./components/grid-system";
import {defaultGrid} from "./components/grid-system/config";
import Header from "./components/header";
import Icon from "./components/icon";
import {BlockLink, InlineLink} from "./components/links";
import {List, ListItem} from "./components/list";
import Main from "./components/main";
import Sidebar from "./components/sidebar";

import {routes} from "./routes";
import {GlobalStyle} from "./style";

const Menu = () => {
	return (
		<List flatList={true}>
			<ListItem>
				<BlockLink target="_blank" href={"https://twitter.com/bullgit"}>
					<Box>
						<Icon iconName="twitter" /> Twitter
					</Box>
				</BlockLink>
			</ListItem>
			<ListItem>
				<BlockLink target="_blank" href={"https://codepen.io/bullgit"}>
					<Box>
						<Icon iconName="codepen" /> CodePen
					</Box>
				</BlockLink>
			</ListItem>
			<ListItem>
				<BlockLink target="_blank" href={"https://github.com/bullgit"}>
					<Box>
						<Icon iconName="github" /> GitHub
					</Box>
				</BlockLink>
			</ListItem>
			<ListItem>
				<BlockLink target="_blank" href={"https://il.bullg.it/"}>
					<Box>
						<Icon iconName="github" /> Issues
					</Box>
				</BlockLink>
			</ListItem>
			<ListItem>
				<BlockLink target="_blank" href={"https://chat.bullg.it/"}>
					<Box>
						<Icon iconName="slack" /> Chat
					</Box>
				</BlockLink>
			</ListItem>
			<ListItem>
				<BlockLink target="_blank" href={"https://bullg.it/media"}>
					<Box>
						<Icon iconName="images" /> Media
					</Box>
				</BlockLink>
			</ListItem>
		</List>
	);
};

const NavItem = styled(BlockLink)`
	${props => css`
		background: ${props.theme.colors.background.dark};
		color: #fff;
		&:hover {
			background: ${props.theme.colors.background.darker};
		}
	`};
	${BoxAYX} {
		background: inherit;
		color: #fff;
	}
`;

const Footer = styled.footer`
	${props => css`
		background: ${props.theme.colors.background.darker};
		color: #fff;
	`};
`;

class App extends React.Component {
	public render() {
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					{process.env.NODE_ENV !== "production" && <GridOverlay {...defaultGrid} colorAlpha={0.1} />}

					<GlobalStyle />
					<React.Fragment>
						<Header>
							<Column>
								<Row as={"nav"}>
									<NavItem as={Link} to={"/"}>
										<BoxAYX>Home</BoxAYX>
									</NavItem>
									<NavItem as={Link} to={"/repos"}>
										<BoxAYX>Repos</BoxAYX>
									</NavItem>
								</Row>
							</Column>
						</Header>
						<Sidebar>
							<Menu />
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
					<Footer>
						<Grid {...defaultGrid}>
							<Column columnSpan={[4]}>
								<List flatList={true}>
									<ListItem>
										<BlockLink as={Link} to={"/coc"}>
											Code of Conduct
										</BlockLink>
									</ListItem>
									<ListItem>
										<BlockLink as={Link} to={"/map"}>
											Bullgiverse
										</BlockLink>
									</ListItem>
									<ListItem>
										<BlockLink
											target="_blank"
											href={"https://github.com/bullgit/wiki/wiki"}>
											Wiki
										</BlockLink>
									</ListItem>
								</List>
							</Column>
						</Grid>
					</Footer>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

export default hot(module)(App);
