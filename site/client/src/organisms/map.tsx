import {styled, theme} from "@bullgit/styled-components";
import React from "react";
import {gitches} from "../data/gitches";

interface AppState {
	Map: React.ComponentType<any>;
	Marker: React.ComponentType<any>;
	Cluster: React.ComponentType<any>;
	clusterMarker: any;
}

const AvatarMarker = styled.img`
	height: 3rem;
	width: 3rem;
	border-radius: 50%;
`;

const ClusterLabel = styled.text`
	font-size: 1.5rem;
	fill: #fff;
	dominant-baseline: central;
	text-anchor: middle;
`;

const Noop = (props: any) => null;

const InitialState = {
	Cluster: Noop,
	Map: Noop,
	Marker: Noop,
	clusterMarker: Noop
};

const initMap = () => {
	const {default: Mapbox, Marker, Cluster} = require("react-mapbox-gl");
	return {Mapbox, Marker, Cluster};
};

/**
 * @todo add react-router
 */
export class BullgitMap extends React.Component<{}, AppState> {
	public state: AppState = InitialState;
	public componentDidMount() {
		const {Mapbox, Marker, Cluster} = initMap();
		const MapboxMap = Mapbox({
			accessToken:
				"pk.eyJ1IjoicGl4ZWxhc3MiLCJhIjoiY2pwbXBpNm9iMDg5ejQ5anhmMjVzcGVuZyJ9.SCeeFz9mp2BDvfYM48fcFA"
		});
		const clusterMarker = (coordinates, pointCount) => {
			const minMax = (n: number) =>  Math.min(48, Math.max(24, n));
			const r1 = 24;
			const r3 = minMax( pointCount * 12);
			const r2 = minMax((r3 - r1) / 2 + r1);
			return (
				<Marker coordinates={coordinates} key={coordinates.join(":")}>
					<svg
						height={"96px"}
						width={"96px"}
						viewBox="0 0 96 96">
						<circle
							cx={48}
							cy={48}
							r={r3}
							fill={`hsla(${pointCount * 10}, 100%, 50%, 0.75)`}
						/>
						<circle
							cx={48}
							cy={48}
							r={r2}
							fill={`hsla(${pointCount * 10}, 100%, 40%, 0.25)`}
						/>
						<circle
							cx={48}
							cy={48}
							r={r1}
							fill={`hsla(${pointCount * 10}, 100%, 30%, 0.25)`}
						/>
						<ClusterLabel x={48} y={48}>
							{pointCount}
						</ClusterLabel>
					</svg>
				</Marker>
			);
		};
		const Map = styled(MapboxMap)`
			height: 100%;
			width: 100%;
			flex: 1 1 1px;
			color: ${props => props.theme.colors.main};
			font-size: 2rem;
		`;
		this.setState({
			Cluster,
			Map,
			Marker,
			clusterMarker
		});
	}
	public render() {
		const {Cluster, Map, Marker, clusterMarker} = this.state;
		return (
			<Map style="mapbox://styles/mapbox/streets-v8" zoom={[1]}>
				<Cluster ClusterMarkerFactory={clusterMarker} radius={30}>
					{gitches.map((gitch, i) => {
						const [lat, lon] = gitch.latlon;
						return (
							<Marker
								key={gitch.github}
								coordinates={[lon, lat]}
								anchor={gitch.gravatar ? "center" : "bottom"}>
								<AvatarMarker src={gitch.gravatar} />
							</Marker>
						);
					})}
				</Cluster>
			</Map>
		);
	}
}
