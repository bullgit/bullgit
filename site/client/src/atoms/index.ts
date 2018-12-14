import {css, styled, Theme} from "@bullgit/styled-components";
import {StyledComponent} from "styled-components";

/**
 * @todo move all atoms to separate @bullgit/<package_name>
 */

export const Content = styled.div`
	max-width: 80rem;
	margin: auto;
	padding: 1rem;
`;

export const Wrapper = styled(Content)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 1.5rem auto;
	${({theme: {colors}}) => css`
		background: ${colors.background.medium};
		color: #000;
	`};
`;

export const Gravatar = styled.img`
	width: 100%;
	height: auto;
	transition: transform var(--speed) ease-in-out;
	transform: scale3d(1, 1, 1);
	border-radius: inherit;
`;
export const Avatar = styled.div`
	--speed: 0.2s;
	display: flex;
	width: calc(100% - 2rem);
	margin: 1rem;
	align-items: center;
	align-content: center;
	justify-content: center;
	overflow: hidden;
	border-radius: 50%;
	${({theme: {colors}}) => css`
		background: ${colors.main};
		color: #fff;
	`};
	&:hover {
		${Gravatar} {
			transform: scale3d(0.9, 0.9, 1);
		}
	}
`;
export const Gitch = styled.div`
	flex: 1 1 15rem;
	display: flex;
	flex-direction: column;
`;

export const GitchGhost = styled(Gitch).attrs({
	elevation: 0
})`
	margin-top: 0;
	margin-bottom: 0;
	background: none;
`;

interface CardProps {
	theme: Theme;
	elevation?: 1 | 2 | 3 | 4 | 5;
}

export const Card = styled("article")<CardProps>`
	margin: 1.5rem 1rem;
	overflow: hidden;
	border-radius: 3px;
	${({theme: {colors}}) => css`
		background: ${colors.background.light};
		color: #000;
	`};
	${props => {
		switch (props.elevation) {
			case 1:
				return css`
					box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
				`;
			case 2:
				return css`
					box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
				`;
			case 3:
				return css`
					box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
				`;
			case 4:
				return css`
					box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
				`;
			case 5:
				return css`
					box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
				`;
			default:
				return "";
		}
	}};
`;

export const Repo = styled(Card).attrs({
	elevation: 1
})`
	flex: 1 1 20rem;
`;

export const RepoGhost = styled(Repo).attrs({
	elevation: 0
})`
	margin-top: 0;
	margin-bottom: 0;
	background: none;
`;

export const RepoName = styled.h2`
	margin: 0;
	padding: 0 1rem 0 0;
	display: flex;
	align-items: center;
	align-content: center;
	font-size: 1em;
	font-weight: lighter;
`;

export const RepoHeader = styled.header`
	display: flex;
	padding: 0;
	border-radius: 3px 3px 0 0;
`;

export const RepoStar = styled.span`
	font-size: 1.5rem;
	padding: 0 0.5rem;
	font-weight: lighter;
	display: flex;
	align-items: center;
	align-content: center;
`;

export const RepoDescription = styled.p`
	padding: 1rem 0.5rem;
`;

export const RepoCount = styled.span`
	padding: 0 0.5rem;
	font-weight: normal;
	display: flex;
	align-items: center;
	align-content: center;
	font-size: 1em;
	${({theme: {colors}}) => css`
		background: ${colors.main};
		color: #fff;
	`};
`;

export const Name = styled.h2`
	margin: -1.5rem -1rem 0;
	padding: 1.5rem 0.5rem 0.5rem;
	display: flex;
	flex: 1;
	align-items: center;
	align-content: center;
	justify-content: center;
	font-size: 1.5rem;
	font-weight: lighter;
	text-align: center;
`;
export const Title = styled.h3`
	margin: 0;
	padding: 0.25rem 0;
	font-size: 1rem;
	font-weight: lighter;
`;

export const Link = styled.a`
	display: inline-flex;
	text-decoration: none;
	color: currentColor;

	&:hover {
		${({theme: {colors}}) => css`
			color: ${colors.main};
		`};
	}
`;
export const BlockLink = styled(Link)`
	display: flex;
	width: 100%;
`;
export const InlineLink = styled(Link)`
	margin: 0.25rem;
`;
export const SocialLinks = styled.section`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	font-size: 1.5rem;
`;
export const Info = styled.article`
	flex: 1;
	padding: 1.5rem 0;
`;
export const Icon = styled.svg.attrs({
	viewBox: "0 0 24 24"
})`
	width: 1em;
	height: 1em;
	fill: currentColor;
`;

