import React from "react";
import {defaultGrid} from "../components/grid-system/config";
import Main from "../components/main";
import {Repos} from "../organisms/repos";


export const Repositories = () => {
	return (
		<React.Fragment>
			<Main {...defaultGrid}>
				<Repos sortBy={["name"]}/>
			</Main>
		</React.Fragment>
	)
};
