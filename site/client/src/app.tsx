import {css, styled, theme, ThemeProvider} from "@bullgit/styled-components";
import React from "react";
import {hot} from "react-hot-loader";
import {Route, Switch} from "react-router";
import {NavLink} from "react-router-dom";
import {Logo} from "./atoms/logo";

import GridOverlay from "./components/grid";
import {Box, BoxAYX, Column, Grid, Row} from "./components/grid-system";
import {defaultGrid} from "./components/grid-system/config";
import Header from "./components/header";
import Icon from "./components/icon";
import {BlockLink} from "./components/links";
import {List, ListItem} from "./components/list";
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

const Bullheader = styled(Header)`
	${({theme: {colors}}) => css`
		background: ${colors.background.medium};
		color: #000;
	`};
`;

const StyledLogo = styled(Logo)`
	font-size: 3rem;
	margin: -0.25em 0;
`;
const LinkWrapper = styled(BoxAYX)`
	display: flex;
	background: inherit;
	font-weight: bold;
`;

const NavItem = styled(BlockLink).attrs({
	activeClassName: "isActive"
})`
	${({theme: {colors}}) => css`
		background: ${colors.background.medium};
		color: #000;
		&:hover {
			background: ${colors.background.light};
			color: ${colors.main};
		}
		&.isActive {
			color: ${colors.main};
		}
	`};
`;


const Footer = styled.footer`
	${({theme: {colors}}) => css`
		background: ${colors.background.medium};
		color: #000;
	`};
`;

class App extends React.Component {
	public render() {
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					{process.env.NODE_ENV !== "production" && (
						<GridOverlay {...defaultGrid} columnCount={[4, 8, 12, 16]} maxWidth={1680} colorAlpha={0.2}/>
					)}
					<GlobalStyle />
					<React.Fragment>
						<Bullheader>
							<Column>
								<Row as={"nav"}>
									<NavItem as={NavLink} to={"/"} exact={true}>
										<LinkWrapper><StyledLogo/> Home</LinkWrapper>
									</NavItem>
									<NavItem as={NavLink} to={"/repos"}>
										<LinkWrapper>Repos</LinkWrapper>
									</NavItem>
								</Row>
							</Column>
						</Bullheader>
						<Sidebar>
							<Menu />
						</Sidebar>
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
					<Footer>
						<Grid {...defaultGrid}>
							<Column columnSpan={[4]}>
								<List flatList={true}>
									<ListItem>
										<BlockLink as={NavLink} to={"/coc"}>
											Code of Conduct
										</BlockLink>
									</ListItem>
									<ListItem>
										<BlockLink as={NavLink} to={"/map"}>
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
