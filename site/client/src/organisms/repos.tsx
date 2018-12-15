import React from "react";
import {repos} from "../data/repos";
import {Icon} from "../atoms/icon";

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
			<div>
				{filteredRepos.map(repo => {
					return (
						<div key={repo.id}>
							<header>
								<h2>
									<a href={repo.html_url}>{repo.name}</a>
								</h2>
								<a href={repo.stargazers_url}>
									<Icon iconName="star" iconColor="#F57F17" />{" "}
									{repo.stargazers_count}
								</a>
							</header>
							<section>{repo.description}</section>
							<details>
								<summary>more info</summary>
								<section>
									<div>
										<strong>Open issues: </strong>
										<span>{repo.open_issues_count}</span>
									</div>
									<div>
										<strong>Watchers: </strong>
										<span>{repo.watchers_count}</span>
									</div>
									<div>
										<strong>Forks: </strong>
										<span>{repo.forks_count}</span>
									</div>
									<div>
										<strong>Created: </strong>
										<span>{repo.created_at}</span>
									</div>
									<div>
										<strong>Last update: </strong>
										<span>{repo.updated_at}</span>
									</div>
								</section>
							</details>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
};
