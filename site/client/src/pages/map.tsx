import {styled} from "@bullgit/styled-components";
import React from "react";
import {BullgitMap} from "../organisms/map";

const MapWrapper = styled.div`
	height: 100vh;
	width: 100vw;
`;
export const Map = () => {
	return (
		<MapWrapper>
			<BullgitMap/>
		</MapWrapper>
	)
};