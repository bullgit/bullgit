import React from "react";
import {
	Avatar,
	BlockLink,
	Card,
	Content,
	Gitch,
	GitchGhost,
	Gravatar,
	Info,
	Name,
	SocialLinks,
	Title,
	Wrapper
} from "../atoms";
import {icons} from "../atoms/icons";
import {gitches} from "../data/gitches";
import {SocialLink} from "../molecules";

/**
 * @todo move all organisms to separate @bullgit/<package_name>
 */
export const Gitches = () => {
	return (
		<React.Fragment>
			<Content>
				<Title>{gitches.length} gitches and counting...</Title>
			</Content>
			<Wrapper>
				{gitches.map(gitch => (
					<Gitch key={gitch.github}>
						<Card elevation={2}>
							<BlockLink href={gitch.url}>
								<Avatar>
									<Gravatar
										src={
											gitch.gravatar ||
											"https://bullg.it/media/vectors/bullgit-logo.svg"
										}
										alt={gitch.name}
									/>
								</Avatar>
							</BlockLink>
							<Info>
								<Name>{gitch.name}</Name>
								<SocialLinks>
									{gitch.email && (
										<SocialLink
											href={`mailto:${gitch.email}`}
											icon={icons.email}
										/>
									)}
									{gitch.url && (
										<SocialLink
											href={`https://github.com/${gitch.url}`}
											icon={icons.link}
										/>
									)}
									{gitch.github && (
										<SocialLink
											href={`https://github.com/${gitch.github}`}
											icon={icons.github}
										/>
									)}
									{gitch.twitter && (
										<SocialLink
											href={`https://twitter.com/${gitch.twitter}`}
											icon={icons.twitter}
										/>
									)}
									{gitch.codepen && (
										<SocialLink
											href={`https://codepen.io/${gitch.codepen}`}
											icon={icons.codepen}
										/>
									)}
								</SocialLinks>
							</Info>
						</Card>
					</Gitch>
				))}
				<GitchGhost />
				<GitchGhost />
				<GitchGhost />
				<GitchGhost />
				<GitchGhost />
				<GitchGhost />
			</Wrapper>
		</React.Fragment>
	);
};
