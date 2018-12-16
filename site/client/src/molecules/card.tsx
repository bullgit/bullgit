import {styled} from "@bullgit/styled-components";
import React from "react";
import Tile, {TileProps} from "../components/tile";

interface CardProps extends Partial<TileProps> {};
export const Card: React.FunctionComponent<CardProps> = ({as, ...props}) => (
	<Tile {...props}/>
);

export const StyledCard = styled(Card)`
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	border-radius: 3px;
`;
