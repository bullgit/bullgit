import {css, styled, theme} from "@bullgit/styled-components";
import React from "react";
import {BoxY, Column, Row} from "../components/grid-system";
import Icon from "../components/icon";
import ImageMedia, {StyledImage} from "../components/image";
import {BlockLink, InlineLink} from "../components/links";
import Headline from "../components/text/headline";
import Tile from "../components/tile";
import {gitches} from "../data/gitches";


const Avatar = styled(BlockLink)`
	border-radius: 50%;
	align-items: center;
	align-content: center;
	justify-content: center;
	display: flex;
	
	${StyledImage} {
		--speed: 0.2s;
		transition-property: transform, box-shadow;
		transition-delay: var(--speed), 0s;
		transition-duration: var(--speed), var(--speed);
		transition-timing-function: ease-in-out, ease-in-out;
		transform: scale3d(1, 1, 1);
		border-radius: 50%;
		height: auto;
		min-height: auto;
		${({theme: {colors}}) => css`
			box-shadow: 0 0 0 0 ${colors.main};
		`};
	}
	&[href]:hover {
		${StyledImage} {
			${({theme: {colors}}) => css`
				box-shadow: 0 0 0 0.5rem ${colors.main};
			`};
			transform: scale3d(0.9, 0.9, 1);
			transition-delay: 0s, var(--speed);
}
	} 
`;

const Name = (props) => {
	return <Headline {...props} as={"h3"}/>
};

const StyledName = styled(Name)`
	text-align: center;
`;

const SocialLinks = styled(BoxY)`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const SocialLink = styled(InlineLink)`
	margin: 0 calc(var(--bullgit-column-margin) / 2);
`;


/**
 * @todo move all organisms to separate @bullgit/<package_name>
 */
export const Gitches = () => {
	return (
		<React.Fragment>
			<Column fullWidth={true}>
				<Headline as={"h3"}>{gitches.length} gitches and counting...</Headline>
			</Column>
			<Column fullWidth={true}>
				<Row>
				{gitches.map(gitch => (

					<Column key={gitch.github} columnSpan={[2, 4, 3, 2]}>
						<Tile backgroundColor={"transparent"} textColor={"currentColor"}>
							<Avatar href={gitch.url}>
									<ImageMedia
										src={
											gitch.gravatar ||
											"https://bullg.it/media/vectors/bullgit-logo.svg"
										}
										alt={gitch.name}
										removeGap={"both"}
									/>
							</Avatar>
							<div>
								<StyledName>{gitch.name}</StyledName>
								<SocialLinks>
									{gitch.email && (
										<SocialLink target="_blank" href={`mailto:${gitch.email}`}>
											<Icon iconName={"email"}/>
										</SocialLink>
									)}{" "}
									{gitch.url && (
										<SocialLink target="_blank" href={gitch.url}>
											<Icon iconName={"link"}/>
										</SocialLink>
									)}{" "}
									{gitch.github && (
										<SocialLink
											target="_blank"
											href={`https://github.com/${gitch.github}`}>
											<Icon iconName={"github"}/>
										</SocialLink>
									)}{" "}
									{gitch.twitter && (
										<SocialLink
											target="_blank"
											href={`https://twitter.com/${gitch.twitter}`}>
											<Icon iconName={"twitter"}/>
										</SocialLink>
									)}{" "}
									{gitch.codepen && (
										<SocialLink
											target="_blank"
											href={`https://codepen.io/${gitch.codepen}`}>
											<Icon iconName={"codepen"}/>
										</SocialLink>
									)}
								</SocialLinks>
							</div>
						</Tile>
					</Column>
				))}
				</Row>
			</Column>
		</React.Fragment>
	);
};
