import {css, styled, theme} from "@bullgit/styled-components";
import React from "react";
import {BoxY, Column, Row} from "../components/grid-system";
import Icon from "../components/icon";
import ImageMedia from "../components/image";
import Headline from "../components/text/headline";
import Tile from "../components/tile";
import {gitches} from "../data/gitches";
import {BlockLink, InlineLink} from "../components/links";

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

					<Column key={gitch.github} columnSpan={[4, 4, 3]}>
						<Tile>
							<BlockLink href={gitch.url} style={{display: "block"}}>
									<ImageMedia
										src={
											gitch.gravatar ||
											"https://bullg.it/media/vectors/bullgit-logo.svg"
										}
										alt={gitch.name}
										removeGap={"both"}
									/>
							</BlockLink>
							<div>

									<Headline as={"h3"}>{gitch.name}</Headline>
								<BoxY>
									{gitch.email && (
										<InlineLink target="_blank" href={`mailto:${gitch.email}`}>
											<Icon iconName={"email"}/>
										</InlineLink>
									)}{" "}
									{gitch.url && (
										<InlineLink target="_blank" href={gitch.url}>
											<Icon iconName={"link"}/>
										</InlineLink>
									)}{" "}
									{gitch.github && (
										<InlineLink
											target="_blank"
											href={`https://github.com/${gitch.github}`}>
											<Icon iconName={"github"}/>
										</InlineLink>
									)}{" "}
									{gitch.twitter && (
										<InlineLink
											target="_blank"
											href={`https://twitter.com/${gitch.twitter}`}>
											<Icon iconName={"twitter"}/>
										</InlineLink>
									)}{" "}
									{gitch.codepen && (
										<InlineLink
											target="_blank"
											href={`https://codepen.io/${gitch.codepen}`}>
											<Icon iconName={"codepen"}/>
										</InlineLink>
									)}
								</BoxY>
							</div>
						</Tile>
					</Column>
				))}
				</Row>
			</Column>
		</React.Fragment>
	);
};
