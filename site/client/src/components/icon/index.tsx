import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {icons} from "./icons";

export interface SvgProps extends React.SVGAttributes<SVGSVGElement> {
	iconSize?: 24 | 48;
}

export const Svg = styled("svg")<SvgProps>`
	height: ${(props: SvgProps) => `${props.iconSize}px`};
	width: ${(props: SvgProps) => `${props.iconSize}px`};
	vertical-align: top;
	pointer-events: none;
`;


export type PathProps = React.SVGAttributes<SVGPathElement>;

export const Path = styled("path")<PathProps>`
	fill: currentColor;
`;

export interface IconProps extends SvgProps {
	iconName: string;
}


const Icon: React.FunctionComponent<IconProps> = ({iconName, ...props}) => (
	<Svg {...props} viewBox={`0 0 ${props.iconSize} ${props.iconSize}`} >
		<Path d={icons[iconName]} />
	</Svg>
);

Icon.defaultProps = {
	iconSize: 24
};


export default Icon;
