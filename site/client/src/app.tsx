import {styled, theme, ThemeProvider} from "@bullgit/styled-components";
import React from "react";
import {hot} from "react-hot-loader";
import {Route, Switch} from "react-router";
import {Link} from "react-router-dom";
import {Icon} from "./atoms/icon";
import {Logo} from "./atoms/logo";
import {routes} from "./routes";
import {GlobalStyle} from "./style";

class App extends React.Component {
	public render() {
		return (
			<ThemeProvider theme={theme}>
				<React.Fragment>
					<GlobalStyle />
					<header>
						<nav>
							<Link to={"/"}><Logo/> Home</Link>
							<Link to={"/repos"}>Repos</Link>
						</nav>
						<ul>
							<li>
								<a target="_blank" href={"https://twitter.com/bullgit"}>
									<Icon iconName="twitter" iconColor="#1da1f2" /> Twitter
								</a>
							</li>
							<li>
								<a target="_blank" href={"https://codepen.io/bullgit"}>
									<Icon iconName="codepen" iconColor="#181818" /> CodePen
								</a>
							</li>
							<li>
								<a target="_blank" href={"https://github.com/bullgit"}>
									<Icon iconName="github" iconColor="#333" /> GitHub
								</a>
							</li>
							<li>
								<a target="_blank" href={"https://il.bullg.it/"}>
									<Icon iconName="github" iconColor="#333" /> Issues
								</a>
							</li>
							<li>
								<a target="_blank" href={"https://chat.bullg.it/"}>
									<Icon iconName="slack" iconColor="#e01563" /> Chat
								</a>
							</li>
							<li><a target="_blank" href={"https://bullg.it/media"}>
								Media
							</a></li>
						</ul>
					</header>
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
