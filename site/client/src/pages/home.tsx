import React from "react";
import {Gitches} from "../organisms";
import {Repos} from "../organisms/repos";


export const Home = () => {
	return (
		<React.Fragment>
			<Repos show={6} sortBy={["-stargazers_count", "name"]}/>
			<Gitches/>
		</React.Fragment>
	)
};
