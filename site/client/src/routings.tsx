import {css, styled} from "@bullgit/styled-components";
import {BullgitMap} from "./organisms/map";
import React from "react";
import {Link} from "react-router-dom";
import {Gitches, Repos} from "./organisms";

/**
 * @todo add react-router
 */

const Header = styled.header`
	height: 3rem;
	margin: 0;
	display: flex;
	justify-content: center;
`;
const HeaderLink = styled(Link)`
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
export const Home = () => {
	return (
		<React.Fragment>
			<Header>
				<HeaderLink to={"/"}>Home</HeaderLink>
				<HeaderLink to={"/coc"}>Code of Conduct</HeaderLink>
				<HeaderLink to={"/map"}>Bullgiverse</HeaderLink>
			</Header>
			<Repos/>
			<Gitches/>
		</React.Fragment>
	)
};
const MapWrapper = styled.div`
	height: 100vh;
	width: 100vw;
`;
export const Map = () => {
	return (
		<MapWrapper>
			<BullgitMap/>
		</MapWrapper>
	)
};
