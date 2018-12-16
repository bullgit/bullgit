import {createGlobalStyle, css, styled} from "@bullgit/styled-components";
import React from "react";
import {FlattenSimpleInterpolation} from "styled-components";
import {calc, pixelToRemRaw, propVal} from "../../utils/css";
import Base, {BaseProps, GridProvider} from "./base";
import {
	BASELINE,
	COLUMN_COUNT,
	COLUMN_MARGIN,
	COLUMN_PADDING,
	GRID_PADDING,
	ROW_GAP,
	VBASELINE,
	VGRID_PADDING
} from "./css";
import {mediaQueries as mq} from "./utils";

export interface StyledGridProps extends BaseProps {
	columnCount: number[];
	columnWidth?: number;
	columnMargin: string[];
	columnPadding: string[];
	gridPadding: string[];
}


export const StyledGrid = styled(Base)<StyledGridProps>`
	${(props: StyledGridProps) => css`
		${propVal(COLUMN_COUNT, props.columnCount[0])};
	`};

	display: flex !important;
	flex-direction: row !important;
	flex-wrap: wrap !important;
	flex-flow: row wrap !important;
	${(props: StyledGridProps) => css`
		flex: 0 1 ${props.columnCount[props.columnCount.length - 1] * props.columnWidth}rem !important;
		width: ${props.columnCount[props.columnCount.length - 1] * props.columnWidth}rem;
		min-width: 20rem;
	`};
	max-width: 100vw;
	margin: auto;
	padding: 0 ${VGRID_PADDING};

	${(props: StyledGridProps) =>
		props.mq(
			(c, i) =>
				css`
					${propVal(COLUMN_COUNT, c)};
				`
		)};
`;

export interface GlobalStyleProps {
	columnCount: number[];
	columnMargin: string[];
	columnPadding: string[];
	gridPadding: string[];
	mq?: (cb: (c: number, i: number) => FlattenSimpleInterpolation) => FlattenSimpleInterpolation;
}

const GlobalStyle: any = createGlobalStyle<GlobalStyleProps>`
	:root {
	${(props) => css`
		${propVal(BASELINE, "1.5rem")};
		${propVal(ROW_GAP, calc(VBASELINE, "/", "2"))};
		${propVal(GRID_PADDING, props.gridPadding[0])};
		${propVal(COLUMN_MARGIN, props.columnMargin[0])};
		${propVal(COLUMN_PADDING, props.columnPadding[0])};
		${props.mq(
			(c, i) =>
				css`
					${propVal(GRID_PADDING, props.gridPadding[i + 1])};
					${propVal(COLUMN_MARGIN, props.columnMargin[i + 1])};
					${propVal(COLUMN_PADDING, props.columnPadding[i + 1])};
				`
		)};
	`};
	}
`;

export interface GridProps extends StyledGridProps {
	maxWidth: number;
	root?: boolean;
}


class Grid extends React.Component<GridProps, {}> {
	private lastColumnsIndex: number = this.props.columnCount.length - 1;
	private lastColumns: number = this.props.columnCount[this.lastColumnsIndex];
	private columnWidth: number = pixelToRemRaw(this.props.maxWidth / this.lastColumns);
	public render() {
		return (
			<GridProvider
				value={{
					columnCount: this.props.columnCount,
					columnWidth: this.columnWidth,
					mq: this.mq
				}}>
				{this.props.root && (
					<GlobalStyle
						gridPadding={this.props.gridPadding}
						columnCount={this.props.columnCount}
						columnMargin={this.props.columnMargin}
						columnPadding={this.props.columnPadding}
						mq={this.mq}
					/>
				)}
				<StyledGrid
					{...this.props}
					columnWidth={this.columnWidth}
					gridPadding={this.props.gridPadding}
					mq={this.mq}
				/>
			</GridProvider>
		);
	}
	private mq = callback => mq(this.props.columnCount, this.columnWidth, callback).reduce((a, b) => a.concat(b));
}

export default Grid;
