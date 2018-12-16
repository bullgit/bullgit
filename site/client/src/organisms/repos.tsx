import {css, styled} from "@bullgit/styled-components";
import React from "react";
import {Box, BoxAX, BoxAXY, BoxAY, BoxY, Column, Row} from "../components/grid-system";
import Icon from "../components/icon";
import {BlockLink} from "../components/links";
import Copy from "../components/text/copy";
import Headline from "../components/text/headline";
import Tile from "../components/tile";
import {repos} from "../data/repos";

type Primer = (...args: any[]) => number;
interface Config {
	name: string;
	primer?: Primer;
	reverse?: boolean;
}

interface SortConfig extends Config {
	name: string;
}

export interface ReposProps {
	show?: number;
	sortBy?: Array<SortConfig|string>;
}

type Comparator = number | string;

const compare = (a: Comparator, b: Comparator) => {
	if (a === b) {
		return 0;
	}
	if (typeof a === "string" && typeof b === "string") {
		return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
	}
	return a < b ? -1 : 1;
};

const getCmpFunc = ({primer, reverse}: Config) => {
	const cmp = primer ?
		(a, b) => compare(primer(a), primer(b))
		: compare;
	if (reverse) {
		return (a, b) => -1 * cmp(a, b);
	}
	return cmp;
};
const sortByFields = (...args: Array<SortConfig|string>) => {
	const fields = [];
	const {length} = args;

	for (let i = 0; i < length; i++) {
		const field = args[i];
		const name = field;
		const cmp = compare;
		if (typeof field === "object") {
			fields.push({
				cmp: getCmpFunc(field),
				name: field.name
			});
		} else {
			fields.push({name, cmp});
		}

	}

	return (a, b) => {
		let result;
		for (let i = 0; i < length; i++) {
			result = 0;
			const field = fields[i];
			const {name, cmp} = field;
			result = cmp(a[name], b[name]);
			if (result !== 0) {
				break
			};
		}
		return result;
	}
};

const Stargazers = styled(BoxY)`
	display: flex;
	justify-content: flex-end;
`;

const Star = styled.span`
	margin-right: var(--bullgit-column-margin);
`;

const Globe = styled(Box)`
	display: flex;
`;

const Header = styled(Column).attrs({
	fullWidth: true
})`
	display: flex;
	${BlockLink} {
		${({theme: {colors}}) => css`
			color: ${colors.main};
		`};
		&:hover {
			color: #000;
		}
	}
`;

const Name = (props) => {
	return <Headline {...props} as={"h3"}/>
};

const StyledName = styled(Name)`
	flex: 1;
	display: flex;
`;

const Toggle = styled(BoxAXY)`
	font-weight: bold;
	cursor: pointer;
	display: block;
	&::-webkit-details-marker {
		display: none;
	}
	${({theme: {colors}}) => css`
		color: ${colors.main};
		&:hover {
			color: #000;
		}
	`};
`;

const Open = styled(Icon).attrs({
	iconName: "chevronDown"
})`

`;

const Close = styled(Icon).attrs({
	iconName: "chevronUp"
})`
	display: none;
`;

const ToggleBox = styled(BoxAY)`
	display: block;
	&[open] > ${Toggle} {
		${Close} {
			display: unset;
		}
		${Open} {
			display: none;
		}
		${({theme: {colors}}) => css`
			background: ${colors.main};
			color: #fff;
			&:hover {
				background: none;
				color: #000;
			}
		`};
	}
`

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
										<Header>
											<StyledName>
												<BlockLink href={repo.html_url}>
													{repo.name.match("eeeeee")
														? "eeeee..."
														: repo.name}
												</BlockLink>
												{repo.homepage && (
													<BlockLink href={repo.homepage}>
														<Globe>
															<Icon iconName="globe" />
														</Globe>
													</BlockLink>
												)}
											</StyledName>

											<BlockLink href={repo.stargazers_url}>
												<Stargazers>
													<Star><Icon iconName="star" /></Star> {repo.stargazers_count}
												</Stargazers>
											</BlockLink>
										</Header>
									</Row>
									<Copy>
										{repo.description && repo.description.match("eeeeee")
											? "eeeee..."
											: repo.description}
									</Copy>
									<ToggleBox as={"details"}>
										<Toggle as={"summary"}>
											<Open/><Close/> more info
										</Toggle>
										<BoxY as={"section"}>
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
										</BoxY>
									</ToggleBox>
								</Tile>
							</Column>
						);
					})}
				</Row>
			</Column>
		</React.Fragment>
	);
};
