import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";
import { App } from "./components/App";

ReactDOM.render(
	<Provider store={createStore(reducers, applyMiddleware(thunk))}>
		<App />
	</Provider>,
	document.querySelector("#root")
);
