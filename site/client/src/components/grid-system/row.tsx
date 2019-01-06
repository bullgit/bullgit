import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {calc, parens, propVal} from "../../utils/css";
import Base, {BaseProps} from "./base";
import {COLUMN_COUNT, VCOLSPAN, VCOLUMN_MARGIN, VCOLUMN_PADDING} from "./css";

export type StyledRowProps = BaseProps

export const StyledRow = styled(Base)<StyledRowProps>`
	${propVal(COLUMN_COUNT, VCOLSPAN)};
	display: flex !important;
	flex-direction: row !important;
	flex-wrap: wrap !important;
	flex-flow: row wrap !important;
	flex-grow: 0 !important;
	flex-shrink: 0 !important;
	padding-left: 0 !important;
	padding-right: 0 !important;
	margin-left: ${calc(parens(VCOLUMN_PADDING, "+", VCOLUMN_MARGIN), "*", -1)} !important;
	margin-right: ${calc(parens(VCOLUMN_PADDING, "+", VCOLUMN_MARGIN), "*", -1)} !important;
	flex-basis: ${calc("100%", "+", parens(VCOLUMN_PADDING, "+", VCOLUMN_MARGIN), "*", 2)} !important;
	width: ${calc("100%", "+", parens(VCOLUMN_PADDING, "+", VCOLUMN_MARGIN), "*", 2)} !important;
`;

export type RowProps = BaseProps

const Row = React.forwardRef((props: RowProps, ref: any) => <StyledRow {...props} ref={ref} />);

export default Row;
