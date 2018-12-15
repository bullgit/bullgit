import {css, styled} from "@bullgit/styled-components";
import React from "react";

export const StyledPath = styled.path`
	fill: currentColor;
	stroke: none;
	stroke-width: 0;
`;

export const StyledSvg = styled.svg`
	width: 1em;
	height: 1em;
	min-width: 1.5rem;
	min-height: 1.5rem;
`;

export interface IconBaseProps extends React.SVGProps<SVGSVGElement> {
	icon?: string;
}

export const IconBase: React.FunctionComponent<IconBaseProps> = ({icon, ref, ...props}) => {
	return (
		<StyledSvg {...props} ref={ref as React.RefObject<SVGSVGElement>}>
			<StyledPath d={icon} />
		</StyledSvg>
	);
};

IconBase.defaultProps = {
	viewBox: "0 0 24 24"
};

export const OutlineIcon = styled(IconBase)`
	${StyledPath} {
		fill: none;
		stroke: currentColor;
		stroke-width: 1px;
	}
`;

export const BoxIcon = styled(IconBase).attrs({
	viewBox: "-8 -8 40 40"
})`
	font-size: 3rem;
`;

export const BubbleIcon = styled(BoxIcon)`
	border-radius: 50%;
`;

export interface IconTypeProps extends IconBaseProps {
	variation?: "box" | "bubble" | "outline";
}

export const IconType: React.FunctionComponent<IconTypeProps> = ({variation, ref, viewBox, ...props}) => {
	switch (variation) {
		case "box":
			return <BoxIcon {...props} ref={ref as React.RefObject<SVGSVGElement>} />;
		case "bubble":
			return <BubbleIcon {...props} ref={ref as React.RefObject<SVGSVGElement>} />;
		case "outline":
			return <OutlineIcon {...props} ref={ref as React.RefObject<SVGSVGElement>} />;
		default:
			return <IconBase {...props} ref={ref as React.RefObject<SVGSVGElement>} />;
	}
};
