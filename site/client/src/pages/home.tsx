import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {BoxAY, BoxY, Column, Grid, Spacer} from "../components/grid-system";
import {defaultGrid} from "../components/grid-system/config";
import Main from "../components/main";
import {Gitches} from "../organisms/gitches";
import {Repos} from "../organisms/repos";
import Copy from "../components/text/copy";

const Gitchmunity = styled.div`
	${({theme: {colors}}) => css`
		background: ${colors.background.dark};
		color: #fff;
	`};
`;

const Stage = styled(BoxAY)`
	background-image: url("https://bullg.it/assets/img/section_background.jpg");
	background-size: cover;
`;

export const Home = () => {
	return (
		<React.Fragment>
			<Spacer/>
			<BoxY>
				<Grid {...defaultGrid} columnCount={[4, 4]} maxWidth={960}>
					<Column fullWidth={true}>
						<Copy>
							bullgit is a developer crew & a bunch of 31 friends from all around the
							world. We're united in our search for the most crazy, fun and useless web
							projects. A family working on making a ['crazier', 'funnier', 'better'] web,
							step by step.
						</Copy>
					</Column>
				</Grid>
			</BoxY>
			<Spacer/>
			<Stage>
				<Grid {...defaultGrid} columnCount={[4, 4]} maxWidth={960}>
					<Repos show={1} sortBy={["-stargazers_count", "name"]} />
				</Grid>
			</Stage>
			<div>
				<Grid {...defaultGrid} columnCount={[4, 8]} maxWidth={960}>
					<Repos show={6} sortBy={["name"]} />
				</Grid>
			</div>
			<Gitchmunity>
				<Main {...defaultGrid} columnCount={[4, 8, 12, 16]}>
					<Gitches />
				</Main>
			</Gitchmunity>
		</React.Fragment>
	);
};
