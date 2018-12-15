import React from "react";
import {BoxAY, BoxY, Column, Row} from "../components/grid-system";
import Icon from "../components/icon";
import {BlockLink, InlineLink} from "../components/links";
import Copy from "../components/text/copy";
import Headline from "../components/text/headline";
import Tile from "../components/tile";
import {repos} from "../data/repos";

export type Sorting =
	| "stargazers_count"
	| "open_issues_count"
	| "name"
	| "-stargazers_count"
	| "-open_issues_count"
	| "-name";
export interface ReposProps {
	show?: number;
	sortBy?: Sorting[];
}

const sortByFields = (...fields) => {
	return (a, b) => {
		return fields
			.map(field => {
				const dir = field[0] === "-" ? -1 : 1;
				const key = dir < 1 ? field.substring(1) : field;
				if (a[key] > b[key]) {
					return dir;
				}
				if (a[key] < b[key]) {
					return -1 * dir;
				}
				return 0;
			})
			.reduce((previous, next) => {
				return previous ? previous : next;
			}, 0);
	};
};

export const Repos: React.FunctionComponent<ReposProps> = props => {
	const {sortBy, show} = props;
	const sortedRepos = repos;
	if (sortBy) {
		sortedRepos.sort(sortByFields(...sortBy));
	}
	const filteredRepos = show ? sortedRepos.filter((x, i) => i < show) : sortedRepos;
	return (
		<React.Fragment>
			<Column fullWidth={true}>
				<Row>
					{filteredRepos.map(repo => {
						return (
							<Column key={repo.id} columnSpan={[4]}>
								<Tile removePadding={"top"}>
									<Row as={"header"}>
										<Column columnSpan={[3]}>
											<Headline as={"h3"}>
												<InlineLink href={repo.html_url}>{repo.name.match("eeeeee") ? "eeeee..." : repo.name}</InlineLink>
											</Headline>
										</Column>
										<Column>
											<BlockLink href={repo.stargazers_url}>
												<BoxY>
													<Icon iconName="star" />{" "}
													{repo.stargazers_count}
												</BoxY>
											</BlockLink>
										</Column>

									</Row>
									<Copy>{repo.description && repo.description.match("eeeeee") ? "eeeee..." : repo.description}</Copy>
									<BoxAY as={"details"}>
										<BoxY as={"summary"}>more info</BoxY>
										<section>
											<Copy>
												<strong>Open issues: </strong>
												<span>{repo.open_issues_count}</span>
											</Copy>
											<Copy>
												<strong>Watchers: </strong>
												<span>{repo.watchers_count}</span>
											</Copy>
											<Copy>
												<strong>Forks: </strong>
												<span>{repo.forks_count}</span>
											</Copy>
											<Copy>
												<strong>Created: </strong>
												<span>{repo.created_at}</span>
											</Copy>
											<Copy>
												<strong>Last update: </strong>
												<span>{repo.updated_at}</span>
											</Copy>
										</section>
									</BoxAY>
								</Tile>
							</Column>
						);
					})}
				</Row>
			</Column>
		</React.Fragment>
	);
};
