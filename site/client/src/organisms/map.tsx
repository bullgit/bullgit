import {styled, theme} from "@bullgit/styled-components";
import React from "react";
import {Icon} from "../atoms/index";
import {icons} from "../atoms/icons";
import {gitches} from "../data/gitches/index";


interface AppState {
	Map: React.ComponentType<any>;
	Marker: React.ComponentType<any>;
	Cluster: React.ComponentType<any>;
	clusterMarker: any;
}

const BigIcon = styled(Icon)`
	font-size: 3rem;
`;

const AvatarMarker = styled.img`
	height: 3rem;
	width: 3rem;
	border-radius: 50%;
`;

const MapMarker = () => {
	return (
		<BigIcon>
			<path d={icons.marker} />
		</BigIcon>
	);
};

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
			// injectCss: false
		});
		const clusterMarker = coordinates => {
			return (
				<Marker coordinates={coordinates} key={coordinates.join("")}>
					<AvatarMarker src={"https://bullg.it/media/pixels/bullgit-pro.png"} />
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
									{gitch.gravatar ? (
										<AvatarMarker src={gitch.gravatar} />
									) : (
										<MapMarker />
									)}
								</Marker>
						);
					})}
				</Cluster>
			</Map>
		);
	}
}
