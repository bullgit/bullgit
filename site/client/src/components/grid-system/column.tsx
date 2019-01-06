import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {calc, propVal} from "../../utils/css";
import Base, {BaseProps, GridConsumer} from "./base";
import {COLSPAN, VCOLSPAN, VCOLUMN_COUNT, VCOLUMN_MARGIN, VCOLUMN_PADDING, viewportProperty, viewportVar} from "./css";

export interface StyledColumnProps extends BaseProps {
	columnCount?: number[];
}

export const StyledColumn = styled(Base)<StyledColumnProps>`
	${(props) =>
		props.columnCount &&
		props.columnCount.slice(1).map(
			(c, i) => css`
				${propVal(viewportProperty(i + 1), viewportVar(i))};
			`
		)};
	${propVal(viewportProperty(0), 1)};
	${propVal(COLSPAN, viewportVar(0))};
	box-sizing: border-box !important;
	padding-left: ${VCOLUMN_PADDING} !important;
	padding-right: ${VCOLUMN_PADDING} !important;
	margin-right: ${VCOLUMN_MARGIN} !important;
	margin-left: ${VCOLUMN_MARGIN} !important;
	align-self: flex-start !important;
	width: ${calc("100%", "/", VCOLUMN_COUNT, "*", VCOLSPAN, "-", VCOLUMN_MARGIN, "*", 2)} !important;
	flex-grow: 0 !important;
	flex-shrink: 0 !important;
	flex-basis: ${calc("100%", "/", VCOLUMN_COUNT, "*", VCOLSPAN, "-", VCOLUMN_MARGIN, "*", 2)} !important;

	${(props) =>
		props.mq &&
		props.mq(
			(c, i) => css`
				${propVal(COLSPAN, viewportVar(i + 1))};
			`
		)};
`;

export interface ColumnProps extends BaseProps {
	columnSpan?: Array<number | string>;
	fullWidth?: boolean;
}


const Column = React.forwardRef((props: ColumnProps, ref: any) => (
	<GridConsumer>
		{grid => {
			const columns = props.fullWidth ? [VCOLUMN_COUNT] : props.columnSpan;
			const columnSpan = columns.reduce(
				(a, b, i) => ({
					...a,
					[viewportProperty(i)]: b
				}),
				{}
			);
			return (
				<StyledColumn
					{...props}
					columnCount={grid.columnCount}
					mq={grid.mq}
					style={{
						...props.style,
						...columnSpan
					}}
					ref={ref}
				/>
			);
		}}
	</GridConsumer>
));

Column.defaultProps = {
	columnSpan: [1]
};

export default Column;
