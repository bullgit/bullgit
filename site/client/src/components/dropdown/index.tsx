import {styled} from "@bullgit/styled-components";
import React from "react";
import Button from "../button";
import {VBASELINE, VROW_GAP} from "../grid-system/css";

export interface StyledDropdownProps extends React.HTMLAttributes<HTMLElement> {}

const StyledDropdown = styled("section")<StyledDropdownProps>`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	margin: 0;
`;

export interface DropdownContentProps extends React.HTMLAttributes<HTMLElement> {
	isOpen?: boolean;
}

const DropdownContent = styled("section")<DropdownContentProps>`
	position: absolute;
	z-index: 3;
	top: 100%;
	left: 0;
	min-width: 100%;
	margin-top: ${VROW_GAP};
	padding: 0;
	display: ${(props: any) => (props.isOpen ? "grid" : "none")};
	grid-template-columns: 1fr;
	grid-row-gap: ${VBASELINE};
	flex-direction: column;
	background: #fff;
	border-radius: 3px;
	box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
	overflow: hidden;
`;

export interface DropdownProps extends React.HTMLAttributes<HTMLElement> {
	isOpen?: boolean;
	textLabel?: string;
	onClick?: (e: React.MouseEvent<{}>) => void;
	ref?: HTMLElement;
}


export const Dropdown: React.FunctionComponent<DropdownProps> = props => {
	return (
		<StyledDropdown>
			<Button
				{...this.props}
				iconPosition="right"
				iconName={props.isOpen ? "chevronUp" : "chevronDown"}
				hideText={!Boolean(props.textLabel)}>
				{props.textLabel}
			</Button>
			<DropdownContent isOpen={props.isOpen}>{this.props.children}</DropdownContent>
		</StyledDropdown>
	);
};

export const RefDropdown = React.forwardRef((props: DropdownProps, ref: any) => (
	<StyledDropdown ref={ref}>
		<Button
			{...props}
			iconPosition="right"
			iconName={props.isOpen ? "chevronUp" : "chevronDown"}
			hideText={!Boolean(props.textLabel)}>
			{props.textLabel}
		</Button>
		<DropdownContent isOpen={props.isOpen}>{props.children}</DropdownContent>
	</StyledDropdown>
));
