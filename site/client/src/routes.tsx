import {CodeOfConduct} from "./pages/coc";
import {Home} from "./pages/home";
import {Map} from "./pages/map";
import {Repositories} from "./pages/repos";

export interface Route {
	location: string;
	component: React.ComponentType<any>;
	title: string;
	description: string;
	keywords: string;
	summary: string;
}

export type Routes = Route[]

export const routes: Routes = [
	{
		component: Home,
		description: "Welcome to awesomeness. Serving finest shit since 2013",
		keywords: "a",
		location: "/",
		summary: "Welcome to awesomeness. Serving finest shit since 2013",
		title: "Bullgit | Serving finest shit since 2013"
	},
	{
		component: Map,
		description: "Welcome to awesomeness. Serving finest shit since 2013",
		keywords: "a",
		location: "/map",
		summary: "a",
		title: "Bullgiverse | The bullgit world map"
	},
	{
		component: Repositories,
		description: "Welcome to awesomeness. Serving finest shit since 2013",
		keywords: "a",
		location: "/repos",
		summary: "a",
		title: "Bullgit | Serving finest shit since 2013"
	},
	{
		component: CodeOfConduct,
		description: "Welcome to awesomeness. Serving finest shit since 2013",
		keywords: "a",
		location: "/coc",
		summary: "a",
		title: "Bullgit | Code of Conduct"
	}
];
