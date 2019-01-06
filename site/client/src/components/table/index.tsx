import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {calc} from "../../utils/css";
import {VCOLUMN_COUNT, VCOLUMN_MARGIN, VCOLUMN_PADDING, VROW_GAP} from "../grid-system/css";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
	columnSpan?: number | string;
}


export const Table = styled("table")<TableProps>`
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 1em;
	vertical-align: baseline;
	border-collapse: collapse;
	border-spacing: 0;
	table-layout: fixed;

	${(props) =>
		props.columnSpan &&
		css`
			width: ${calc("100%", "/", VCOLUMN_COUNT, "*", props.columnSpan)};
		`};
`;

Table.defaultProps = {
	columnSpan: VCOLUMN_COUNT
};


export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;

export const TableRow = styled("tr")<TableRowProps>`
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 1em;
	vertical-align: baseline;

	&:nth-child(even) {
		background: whitesmoke;
	}
`;

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
	removeGap?: boolean;
	columnSpan?: number;
	as?: "th";
}

export const TableCell = styled("td")<TableCellProps>`
	margin: 0;
	border: 0;
	font: inherit;
	font-size: 1em;
	vertical-align: top;
	padding: ${(props) => (props.removeGap ? 0 : VROW_GAP)}
		${calc(VCOLUMN_PADDING, "+", VCOLUMN_MARGIN, "+", "2px")};
	${(props) =>
		props.columnSpan &&
		css`
			width: ${calc("100%", "/", VCOLUMN_COUNT, "*", props.columnSpan)};
		`};
	${(props) =>
		props.as === "th" &&
		css`
			font-weight: bolder;
			text-align: left;
			background: slategrey;
			color: white;
		`};

	&:first-child {
		border-left-color: transparent;
	}
	&:last-child {
		border-right-color: transparent;
	}
`;


export type TableHeadProps = React.HTMLAttributes<HTMLElement>;

export const TableHead = styled("thead")<TableHeadProps>`
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 1em;
	vertical-align: baseline;
	box-shadow: inset 0 -1px 0 0 #ddd;
`;

export type TableBodyProps = React.HTMLAttributes<HTMLElement>;

export const TableBody = styled.tbody<TableBodyProps>`
	margin: 0;
	padding: 0;
	border: 0;
	font: inherit;
	font-size: 1em;
	vertical-align: baseline;
`;
