import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {calc} from "../../utils/css";
import {BoxY} from "../grid-system";
import {VCOLUMN_MARGIN, VCOLUMN_PADDING, VROW_GAP} from "../grid-system/css";
import Icon from "../icon";

export interface ButtonLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
	hideText?: boolean;
	isActive?: boolean;
}


export const ButtonLabel = styled("span")<ButtonLabelProps>`
	display: flex;
	padding: 0 ${VCOLUMN_MARGIN};
	${(props) =>
		props.hideText
			? css`
					position: absolute;
					z-index: 20;
					top: 50%;
					left: 100%;
					opacity: 0;
					transform: translate3d(${calc("-50%", "-", VCOLUMN_MARGIN)}, -50%, 0);
					transition-property: opacity, transform;
					transition-duration: 0.25s, 0.25s;
					transition-timing-function: ease-in-out, ease-in-out;
					padding-top: ${VROW_GAP};
					padding-bottom: ${VROW_GAP};
					background: inherit;
					border-radius: 3px;
					box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
					pointer-events: none;
					display: none;
			  `
			: null};
`;

export interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	hideText?: boolean;
	buttonType?: "primary" | "secondary" | "default";
	buttonSize?: "small" | "default";
}


const StyledButton = styled("button")<StyledButtonProps>`
	${(props) =>
		props.hideText
			? css`
					position: relative;
					/* overflow: hidden; */
					&:hover ${ButtonLabel} {
						/* opacity: 1; */
						/* transform: translate3d(${calc("-50%", "-", VCOLUMN_PADDING)}, -150%, 0); */
					}
			  `
			: null};
	display: inline-flex;
	align-items: center;
	align-content: center;
	justify-content: flex-start;

	${(props) => {
		switch (props.buttonSize) {
			case "default":
				return css`
					padding: ${calc(VROW_GAP, "/", 2)} ${VCOLUMN_MARGIN};
					margin: ${calc(VROW_GAP, "*", -0.5)} 0;
				`;
			case "small":
				return css`
					padding: 0 ${VCOLUMN_MARGIN};
					margin: 0;
				`;
			default:
				return null;
		}
	}};
	cursor: pointer;
	font-size: 1rem;
	line-height: 1.5;
	font-family: inherit;
	border: 0;
	vertical-align: bottom;
	white-space: nowrap;
	border-radius: 3px;
	${(props) => {
		switch (props.buttonType) {
			case "default":
				return css`
					background: whitesmoke;
					color: black;
					box-shadow: 0 0 0 1px lightgrey;
				`;
			case "primary":
				return css`
					background: slateblue;
					color: white;
					box-shadow: 0 0 0 1px darkslateblue;
				`;
			case "secondary":
				return css`
					background: aquamarine;
					color: black;
					box-shadow: 0 0 0 1px mediumaquamarine;
				`;
			default:
				return null;
		}
	}};

	&:hover {
		background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
	}
	&:active {
		background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
	}
`;

StyledButton.defaultProps = {
	buttonSize: "default",
	buttonType: "default"
};
export interface IconButtonProps extends StyledButtonProps {
	removePadding?: boolean;
}


export const IconButton = styled(StyledButton)<IconButtonProps>`
	${(props) =>
		props.removePadding &&
		props.buttonSize === "small" &&
		css`
			padding: 0;
		`};
`;

export interface ButtonProps extends StyledButtonProps {
	iconName?: string;
	iconPosition?: "left" | "right";
}


export const Button: React.FunctionComponent<ButtonProps> = props => {
	if (props.iconName) {
		return (
			<IconButton {...props} removePadding={React.Children.count(props.children) < 1}>
				{props.iconPosition === "left" && <Icon iconName={props.iconName} iconSize={24} />}
				{props.children && <ButtonLabel hideText={props.hideText}>{props.children}</ButtonLabel>}
				{props.iconPosition === "right" && <Icon iconName={props.iconName} iconSize={24} />}
			</IconButton>
		);
	}
	return (
		<StyledButton {...props}>
			{props.children && <ButtonLabel hideText={props.hideText}>{props.children}</ButtonLabel>}
		</StyledButton>
	);
};

Button.defaultProps = {
	iconPosition: "left"
};

export default Button;

export interface ButtonRowProps extends React.HTMLAttributes<HTMLDivElement> {
	floatButtons?: "left" | "center" | "right";
}


export const ButtonRow = styled(BoxY)<ButtonRowProps>`
	display: grid;
	grid-template-columns: repeat(${(props) => React.Children.count(props.children)}, max-content);
	column-gap: ${VCOLUMN_PADDING};
	justify-content: ${(props) => props.floatButtons};
	align-self: flex-start;
`;

ButtonRow.defaultProps = {
	floatButtons: "left"
};
