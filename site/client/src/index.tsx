import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const appRoot = document.querySelector("[data-bullgit-root]");

ReactDOM.hydrate(<App />, appRoot);
