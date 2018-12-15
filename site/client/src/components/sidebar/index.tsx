import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {calc} from "../../utils/css";
import Button from "../button";
import {VBASELINE, VGRID_PADDING, VROW_GAP} from "../grid-system/css";

export interface StyledSidebarProps {
	isOpen?: boolean;
}
const StyledSidebar = styled("aside")<StyledSidebarProps>`
	position: fixed;
	z-index: 7;
	top: ${calc(VBASELINE, "*", 2)};
	left: -15rem;
	bottom: 0;
	min-width: 15rem;
	max-width: 50vw;
	overflow: auto;
	background: whitesmoke;
	color: black;
	padding: ${VROW_GAP} 0;

	transition: transform 0.25s ease-in-out;
	transform: translate3d(${(props: any) => (props.isOpen ? "100%" : 0)}, 0, 0);
`;

const Toggle = styled(Button)`
	position: fixed;
	z-index: 10;
	top: ${calc(VROW_GAP, "/", 2)};
	left: ${VGRID_PADDING};
	margin: 0;
	box-shadow: none;
	background: whitesmoke;
	color: black;
`;

export interface SidebarProps {
	sidebarPosition?: "left" | "right";
}
export interface SidebarState {
	isOpen: boolean;
}

class Sidebar extends React.Component<SidebarProps, SidebarState> {
	public state: SidebarState = {
		isOpen: false
	};

	public render() {
		return (
			<React.Fragment>
				<Toggle onClick={this.handleClick} iconName={this.state.isOpen ? "menuClose" : "menu"} hideText={true}>
					Toggle Menu
				</Toggle>
				<StyledSidebar {...this.props} isOpen={this.state.isOpen}>
					{this.props.children}
				</StyledSidebar>
			</React.Fragment>
		);
	}

	private handleClick = e => {
		this.setState(prevState => ({
			isOpen: !prevState.isOpen
		}));
	};
}

export default Sidebar;
