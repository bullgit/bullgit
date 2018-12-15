import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {calc} from "../../../utils/css";
import {VBASELINE, VROW_GAP} from "../../grid-system/css";

export interface StyledCopyProps extends React.HTMLAttributes<HTMLParagraphElement> {
	textSize?: "small" | "normal" | "medium" | "large";
}

const StyledCopy = styled("p")<StyledCopyProps>`
	margin: 0;
	${(props) => {
		switch (props.textSize) {
			case "large":
				return css`
					padding-top: ${calc(VBASELINE, "/", 4, "*", 3)};
					padding-bottom: ${calc(VBASELINE, "/", 4)};
					font-size: 2.25rem;
					line-height: 1.3333333333;
				`;
			case "medium":
				return css`
					padding-top: ${calc(VBASELINE, "/", 16, "*", 13)};
					padding-bottom: ${calc(VBASELINE, "/", 16, "*", 3)};
					font-size: 1.8125rem;
					line-height: 1.6551724138;
				`;
			case "normal":
				return css`
					font-size: 1rem;
					padding: ${VROW_GAP} 0;
					line-height: 1.5;
				`;
			case "small":
				return css`
					padding: ${calc(VBASELINE, "/", 16, "*", 9)} 0 ${calc(VBASELINE, "/", 16, "*", 7)};
					font-size: 0.75rem;
					line-height: 2;
				`;
			default:
				return null;
		}
	}};

	::after {
		content: "";
		display: table;
		clear: both;
	}
`;


export type CopyProps = StyledCopyProps;

const Copy: React.FunctionComponent<CopyProps> = props => {
	return <StyledCopy {...props} />;
};

Copy.defaultProps = {
	textSize: "normal"
};

export default Copy;
