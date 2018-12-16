import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {calc} from "../../utils/css";
import {Box} from "../grid-system";
import {VCOLUMN_MARGIN, VGRID_PADDING} from "../grid-system/css";

const StyledHeader = styled(Box)`
	position: sticky;
	z-index: 9;
	top: 0;
	left: 0;
	right: 0;
`;

const HeaderText = styled.div`
	margin-left: ${calc(VGRID_PADDING, "+", "1.5rem", "+", VCOLUMN_MARGIN)};
`;

const Header: React.FunctionComponent<{}> = ({children, ...props}) => (
	<StyledHeader {...props} as="header">
		<HeaderText>{children}</HeaderText>
	</StyledHeader>
);

export default Header;
