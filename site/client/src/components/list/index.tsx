import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {calc} from "../../utils/css";
import {VCOLUMN_MARGIN, VCOLUMN_PADDING, VROW_GAP} from "../grid-system/css";

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
	bulletStyle?: "circle" | "round" | "square" | "box";
	flatList?: boolean;
	removeGap?: boolean;
}


export const List = styled.ul<ListProps>`
	list-style: none;
	margin: 0;
	${(props) => css`
		padding: ${props.flatList
			? `${props.removeGap ? 0 : VROW_GAP} 0`
			: `${VROW_GAP} 0 ${VROW_GAP} ${VCOLUMN_PADDING}`};

		> ${ListItem}::before {
			${props.flatList &&
				css`
					display: none;
				`};
			background: ${props.bulletStyle === "round" || props.bulletStyle === "square" ? "currentColor" : "none"};
			border: ${props.bulletStyle === "circle" || props.bulletStyle === "box" ? "1px solid currentColor" : "0"};
			border-radius: ${props.bulletStyle === "round" || props.bulletStyle === "circle" ? "50%" : "0"};
		}
	`};
`;

List.defaultProps = {
	bulletStyle: "round"
};

export interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
	hideText?: boolean;
	isActive?: boolean;
}

export const ListItem = styled("li")<ListItemProps>`
	list-style: none;
	margin: 0;
	padding: 0;

	&::before {
		content: "";
		display: inline-flex;
		height: 0.5rem;
		width: 0.5rem;
		margin-top: 0.25rem;
		margin-bottom: 0.25rem;
		margin-right: ${calc(VCOLUMN_MARGIN)};
		margin-left: ${calc(VCOLUMN_MARGIN, "*", -1, "-", "0.5rem")};
		border: 1px solid currentColor;
		color: #aaa;
		border-radius: 50%;
		vertical-align: text-bottom;
	}
	> ${List} {
		padding-top: 0;
		padding-bottom: 0;
	}
`;
