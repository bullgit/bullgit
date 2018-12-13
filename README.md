# Bullgit

Mono repository for `@bullgit`.

[![GitHub license][license-badge]][license]

## CLI tools

This repo provides two cli tools:

* `bullgit`: handles git related tasks
  * `repos`: gets repos from the bullgit org
    * `--log`: logs the result to the console
    * `--write`: updates the repos.jon file
  * `members`: (n.a.)
* `gitch`: handles member related tasks
  * `add`: adds a new gitch to the bullgiverse
  * `edit`: (n.a.)
  * `remove`: (n.a.)

## Build/develop 

Several tasks have been defined to build or watch files during development.

* `yarn build`: builds the website (used for deployment)
* `yarn watch`: watches and serves the website (https & hot)
  * all lerna packages are watched (respecting ignored)
  * SSR will not reload (requires a restart until implemented)
* `yarn cli:build`: builds the cli tools
* `yarn cli:watch`: watches the cli tools
* ...

> To get a list of all tasks please look at the `package.json` for this project.  
> The tasks have comment headers to explain their purpose

## Build process

The build uses SSR therefore every component needs to allow to be rendered on
the server. 

The build result is split into chunks to optimize performance.

Status: [![Travis branch][build-badge]][build]

## Adding Packages.

To add packages you can chose between different directories.

* `config`: only configuration here
* `tools`: cli/build tools 
* `site`: Home of the website (can host several different sites)
* `packages`: public npm packages (ui-components, misc npm releases under [@bullgit](https://www.npmjs.com/org/bullgit)) 

## Bundles

Packages are usually bundled via rollup.js. You can use any bundler you like as long
as the repo follows the npm standards.

## TypeScript vs. JavaScript

While the Website uses TypeScript, there are no restrictions to packages.  
We recommend TypeScript for compatibility reasons but having fun is more important.  

## Bullgit Website

To work on the website please work inside the folder `site/client/src`.

> All tasks should be run from the project root.

You will see a file called `routes.ts` which looks similar to this:

```ts
import {Home} from "./pages/home";

export interface Route {
	location: string,
	component: React.ComponentType<any>
}

export type Routes = Route[]

export const routes: Routes = [
	{
		component: Home,
		location: "/"
	}
];
```

You can add your page and the desired path here:

> placeholders like `my-page/:pageNumber` are currently not supported but will be
> added in the future.

```ts
import {Home} from "./pages/home";
import {MyPage} from "./pages/my-page";

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
		component: MyPage,
		location: "/my-page",
	}
];
```

[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge
[license]: https://raw.githubusercontent.com/bullgit/bullgit/master/LICENSE
[build-badge]: https://img.shields.io/travis/bullgit/bullgit/master.svg?style=for-the-badge&logo=travis
[build]: https://travis-ci.org/bullgit/bullgit


Copyright © 2018 by team Bullgit.
