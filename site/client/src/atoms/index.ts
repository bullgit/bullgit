import {css, styled} from "@bullgit/styled-components";

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
	align-items: flex-start;
	align-content: flex-start;
	justify-content: center;

	@media (min-width: 40rem) {
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem;
	}
	@media (min-width: 60rem) {
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 1rem;
	}
	@media (min-width: 80rem) {
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem;
	}
`;
export const Gravatar = styled.img`
	width: 100%;
	height: auto;
	transition: transform var(--speed) ease-in-out;
	transform: scale3d(1, 1, 1);
	border-radius: 50%;
`;
export const Avatar = styled.div`
	--speed: 0.2s;
	display: flex;
	width: 100%;
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
	flex: 0 0 15rem;
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;
export const Repo = styled.div`
	flex: 0 0 15rem;
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;
export const Name = styled.h2`
	margin: 0;
	padding: 0.5rem 0;
	display: flex;
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
export const RepoTitle = styled.h3`
	margin: 0;
	padding: 0.25rem 0;
	font-size: 1rem;
	font-weight: normal;
	font-family: monospace;
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
export const RepoCount = styled.span`
	font-size: 1rem;
	font-weight: bold;
`;
