import React from "react";
import {Gitches} from "../organisms/gitches";
import {Repos} from "../organisms/repos";


// <Repos show={6} sortBy={["-stargazers_count", "name"]}/>

export const Home = () => {
	return (
		<React.Fragment>
			<Gitches/>
		</React.Fragment>
	)
};
