import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {Grid} from "../grid-system";
import {GridProps} from "../grid-system/grid";

export type StyledMainProps =  React.HTMLAttributes<HTMLMainElement> ;

const StyledMain = styled("main")<StyledMainProps>`
	flex: 1 1 1px;
	position: relative;
`;

export type MainProps = GridProps;

class Main extends React.Component<MainProps, {}> {
	public render() {
		return (
			<StyledMain>
				<Grid {...this.props} root={true}>
					{this.props.children}
				</Grid>
			</StyledMain>
		);
	}
}

export default Main;
