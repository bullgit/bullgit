import {css, styled, theme, ThemeProvider} from "@bullgit/styled-components";
import React from "react";
import {hot} from "react-hot-loader";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import {routes} from "./routes";
import {GlobalStyle} from "./style";

const Header = styled.header`
	height: 3rem;
	margin: 0;
	display: flex;
	justify-content: flex-end;
	${({theme: {colors}}) => css`
		background: ${colors.background.light};
		color: #000;
	`};
`;

const Footer = styled.footer`
	height: 2rem;
	margin: 0;
	display: flex;
	justify-content: center;
`;

const HeaderLink = styled(Link)`
	color: currentColor;
	text-decoration: none;
	font-weight: lighter;
	font-size: 1rem;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	
	&:hover {
		${({theme: {colors}}) => css`
			color: ${colors.main};
		`};
	}
`;

const FooterLink = styled(Link)`
	color: currentColor;
	text-decoration: none;
	font-weight: bold;
	font-size: 1rem;
	padding: 0 1rem;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	
	&:hover {
		${({theme: {colors}}) => css`
			color: ${colors.main};
		`};
	}
`;
class App extends React.Component {
	public render() {
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<GlobalStyle />
					<Header>
						<HeaderLink to={"/"}>Home</HeaderLink>
						<HeaderLink to={"https://twitter.com/bullgit"}>Twitter</HeaderLink>
						<HeaderLink to={"http://github.com/bullgit"}>GitHub</HeaderLink>
						<HeaderLink to={"http://codepen.io/bullgit"}>CodePen</HeaderLink>
						<HeaderLink to={"http://chat.bullg.it/"}>Chat</HeaderLink>
						<HeaderLink to={"http://il.bullg.it/"}>Issues</HeaderLink>
						<HeaderLink to={"/repos"}>Repos</HeaderLink>
						<HeaderLink to={"https://bullg.it/media"}>Media</HeaderLink>
					</Header>
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
					<Footer>
						<FooterLink to={"/coc"}>Code of Conduct</FooterLink>
						<FooterLink to={"https://github.com/bullgit/wiki/wiki"}>Wiki</FooterLink>
						<FooterLink to={"/map"}>Bullgiverse</FooterLink>
					</Footer>
				</React.Fragment>
			</ThemeProvider>
		);
	}
}

export default hot(module)(App);
