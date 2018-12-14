import React from "react";
import {
	BlockLink,
	OutlineIcon,
	Repo,
	RepoCount,
	RepoDescription,
	RepoGhost,
	RepoHeader,
	RepoName,
	RepoStar,
	Wrapper
} from "../atoms";
import {icons} from "../atoms/icons";
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
	direction?: "ascending" | "descending";
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
	const {sortBy, show, direction} = props;
	const sortedRepos = repos;
	if (sortBy) {
		sortedRepos.sort(sortByFields(...sortBy));
	}
	const filteredRepos = show ? sortedRepos.filter((x, i) => i < show) : sortedRepos;
	return (
		<React.Fragment>
			<Wrapper>
				{filteredRepos.map(repo => {
					return (
						<Repo key={repo.id}>
							<RepoHeader>
								<RepoCount>{repo.stargazers_count}</RepoCount>
								<RepoStar>
									<BlockLink href={repo.stargazers_url}>
										<OutlineIcon>
											<path d={icons.star} />
										</OutlineIcon>
									</BlockLink>
								</RepoStar>
								<RepoName>
									<BlockLink href={repo.html_url}>{repo.name}</BlockLink>
								</RepoName>
							</RepoHeader>

							<RepoDescription>{repo.description}</RepoDescription>
						</Repo>
					);
				})}
				<RepoGhost />
				<RepoGhost />
				<RepoGhost />
				<RepoGhost />
			</Wrapper>
		</React.Fragment>
	);
};
