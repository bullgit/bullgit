import {styled} from "@bullgit/styled-components";
import Base, {BaseProps} from "./base";
import {VCOLUMN_PADDING, VROW_GAP} from "./css";

export const BoxX = styled(Base)<BaseProps>`
	padding: 0 ${VCOLUMN_PADDING};
`;

export const Box = styled(Base)<BaseProps>`
	padding: ${VROW_GAP} ${VCOLUMN_PADDING};
`;

export const BoxY = styled(Base)<BaseProps>`
	padding: ${VROW_GAP} 0;
`;

export const Spacer = styled("div")`
	height: ${VROW_GAP};
`;
