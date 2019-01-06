import {css, styled} from "@bullgit/styled-components";
import {NavLinkProps} from "react-router-dom";

export interface InlineLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
	to?: string;
}

export const InlineLink = styled("a")<InlineLinkProps & Partial<NavLinkProps>>`
	color: currentColor;
	text-decoration: none;
	&:hover {
		${props => css`
			color: ${props.theme.colors.main};
		`};
	}
`;
export const BlockLink = styled(InlineLink)`
	display: block;
`;
