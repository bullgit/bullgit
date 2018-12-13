import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import App from "./app";

const appRoot = document.querySelector("[data-bullgit-root]");

ReactDOM.hydrate(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	appRoot
);
