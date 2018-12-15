import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {IconType, IconTypeProps} from "./icon-factory";
import {IconName, icons} from "./icons";

export interface StyledIconProps extends IconTypeProps {
	iconColor?: string;
}

export const StyledIcon = styled(IconType)<StyledIconProps>`
	${props => css`
		color: ${props.iconColor || "currentColor"};
	`};
`;

export interface IconProps extends StyledIconProps {
	iconName: IconName;
}

export const Icon: React.FunctionComponent<IconProps> = ({iconName, ref, ...props}) => {
	return (
		<StyledIcon {...props} ref={ref as React.RefObject<SVGSVGElement>} icon={icons[iconName]} />
	);
};
