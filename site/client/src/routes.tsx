import {CodeOfConduct} from "./pages/coc";
import {Home} from "./pages/home";
import {Map} from "./pages/map";
import {Repositories} from "./pages/repos";

export interface Route {
	location: string,
	component: React.ComponentType<any>
}

export type Routes = Route[]

export const routes: Routes = [
	{
		component: Home,
		location: "/",
	},
	{
		component: Map,
		location: "/map",
	},
	{
		component: Repositories,
		location: "/repos",
	},
	{
		component: CodeOfConduct,
		location: "/coc",
	}
];
