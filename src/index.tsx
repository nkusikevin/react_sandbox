import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { reducers } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
