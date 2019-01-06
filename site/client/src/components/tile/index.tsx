import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {calc} from "../../utils/css";
import {BoxX} from "../grid-system";
import {ColumnProps} from "../grid-system/column";
import {VBASELINE, VCOLUMN_PADDING} from "../grid-system/css";

export interface StyledTileProps extends ColumnProps {
	backgroundColor?: string;
	textColor?: string;
	removePadding?: "top" | "bottom" | "both";
	removeMargin?: "top" | "bottom" | "both";
}


export const StyledTile = styled(BoxX)<StyledTileProps>`
	${(props) => css`
		padding-top: ${props.removePadding === "top" || props.removePadding === "both" ? 0 : VBASELINE};
		padding-bottom: ${props.removePadding === "bottom" || props.removePadding === "both" ? 0 : VBASELINE};
		margin: ${props.removeMargin === "top" || props.removeMargin === "both" ? 0 : VBASELINE}
			${calc(VCOLUMN_PADDING, "*", -1)}
			${props.removeMargin === "bottom" || props.removeMargin === "both" ? 0 : VBASELINE};
		background: ${props.backgroundColor};
		color: ${props.textColor};
	`};
`;

export type TileProps = StyledTileProps;

const Tile: React.FunctionComponent<TileProps> = (props) => <StyledTile {...props} />;

Tile.defaultProps = {
	backgroundColor: "white",
	textColor: "black"
};

export default Tile;
