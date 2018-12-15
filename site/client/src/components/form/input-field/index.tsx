import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {calc} from "../../../utils/css";
import {Column, Row} from "../../grid-system";
import { VROW_GAP} from "../../grid-system/css";

export interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export const InputLabel = styled("label")<InputLabelProps>`
	display: flex;
`;

export interface InputLabelTextProps extends React.HTMLAttributes<HTMLSpanElement> {}


export const InputLabelText = styled("span")<InputLabelTextProps>`
	width: 100%;
	display: inline-block;
	padding: ${VROW_GAP} 0;
`;

export interface StyledInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled("input")<StyledInputProps>`
	display: inline-flex;
	align-items: center;
	align-content: center;
	justify-content: flex-start;
	padding: ${calc(VROW_GAP, "/", 2)};
	margin: ${calc(VROW_GAP, "*", 0.5)} 0;
	font-size: 1rem;
	line-height: 1.5;
	width: 100%;
	max-width: 100%;
	min-width: 3rem;
	font-family: inherit;
	border: 0;
	vertical-align: bottom;
	border-radius: 3px;
	background: whitesmoke;
	color: black;
	box-shadow: 0 0 0 1px lightgrey;
`;

export interface InputProps extends StyledInputProps {
	textLabel?: string;
}
export const Input: React.FunctionComponent<InputProps> = props => {
	return (
		<InputLabel>
			<Row>
				<Column columnSpan={[4]}>
					<InputLabelText>{props.textLabel}</InputLabelText>
				</Column>
				<Column columnSpan={[4]}>
					<StyledInput {...props} />
				</Column>
			</Row>
		</InputLabel>
	);
};

export default Input;
