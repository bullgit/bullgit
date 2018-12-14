import React from "react";
import {Repos} from "../organisms/repos";


export const Repositories = () => {
	return (
		<React.Fragment>
			<Repos sortBy={["name"]}/>
		</React.Fragment>
	)
};
