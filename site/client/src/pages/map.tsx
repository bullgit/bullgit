import {styled} from "@bullgit/styled-components";
import React from "react";
import {defaultGrid} from "../components/grid-system/config";
import Main from "../components/main";
import {BullgitMap} from "../organisms/map";

const MapWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;
export const Map = () => {
	return (
		<Main {...defaultGrid}>
			<MapWrapper>
				<BullgitMap/>
			</MapWrapper>
		</Main>
	)
};
