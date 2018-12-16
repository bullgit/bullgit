import {styled} from "@bullgit/styled-components";
import Base, {BaseProps} from "./base";
import {VCOLUMN_PADDING, VROW_GAP} from "./css";

export const BoxX = styled(Base)<BaseProps>`
	padding: 0 ${VCOLUMN_PADDING};
`;

export const BoxAX = styled(BoxX)<BaseProps>`
	margin: 0 calc(${VCOLUMN_PADDING} * -1);
`;

export const Box = styled(Base)<BaseProps>`
	padding: ${VROW_GAP} ${VCOLUMN_PADDING};
`;

export const BoxA = styled(Box)<BaseProps>`
	margin: calc(${VROW_GAP} * -1) calc(${VCOLUMN_PADDING} * -1);
`;

export const BoxY = styled(Base)<BaseProps>`
	padding: ${VROW_GAP} 0;
`;

export const BoxAY = styled(BoxY)<BaseProps>`
	margin: calc(${VROW_GAP} * -1) 0;
`;

export const BoxAYX = styled(Box)<BaseProps>`
	margin: calc(${VROW_GAP} * -1) 0;
`;

export const BoxAXY = styled(Box)<BaseProps>`
	margin: 0 calc(${VCOLUMN_PADDING} * -1);
`;

export interface SpacerProps {
	rows?: number;
}

export const Spacer = styled("div")<SpacerProps>`
	height: calc(${VROW_GAP} * ${props => props.rows});
`;

Spacer.defaultProps = {
	rows: 1
};
