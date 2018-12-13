import {CodeOfConduct} from "./pages/coc";
import {Home, Map} from "./routings";

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
		component: CodeOfConduct,
		location: "/coc",
	}
];
