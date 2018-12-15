import {css, styled} from "@bullgit/styled-components";

export interface InlineLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
	to?: string;
}

export const InlineLink = styled("a")<InlineLinkProps>`
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
