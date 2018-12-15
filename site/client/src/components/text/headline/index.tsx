import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {calc} from "../../../utils/css";
import {VBASELINE, VROW_GAP} from "../../grid-system/css";

export interface StyledHeadlineProps extends React.HTMLAttributes<HTMLElement> {
	as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}


const StyledHeadline = styled("div")<StyledHeadlineProps>`
	margin: 0;
	${(props) => {
		switch (props.as) {
			case "h1":
				return css`
					padding: ${VBASELINE} 0;
					font-size: 3rem;
					font-weight: lighter;
				`;
			case "h2":
				return css`
					padding-top: ${calc(VBASELINE, "/", 4, "*", 3)};
					padding-bottom: ${calc(VBASELINE, "/", 4)};
					font-size: 2.25rem;
					line-height: 1.3333333333;
					font-weight: lighter;
				`;
			case "h3":
				return css`
					padding-top: ${calc(VBASELINE, "/", 8, "*", 7)};
					padding-bottom: ${calc(VBASELINE, "/", 8)};
					font-size: 1.75rem;
					line-height: 1.7142857143;
					font-weight: lighter;
				`;
			case "h4":
				return css`
					padding: ${VROW_GAP} 0;
					font-size: 1rem;
					font-weight: bold;
					text-transform: uppercase;
				`;
			case "h5":
				return css`
					font-size: 1rem;
					padding: ${VROW_GAP} 0;
					font-weight: normal;
					text-transform: uppercase;
				`;
			case "h6":
				return css`
					padding: ${calc(VBASELINE, "/", 16, "*", 9)} 0 ${calc(VBASELINE, "/", 16, "*", 7)};
					font-size: 0.75rem;
					line-height: 2;
					font-weight: bold;
				`;
			default:
				return null;
		}
	}};
`;

export type HeadlineProps = StyledHeadlineProps;

const Headline: React.FunctionComponent<HeadlineProps> = props => {
	return <StyledHeadline {...props} />;
};

export default Headline;
