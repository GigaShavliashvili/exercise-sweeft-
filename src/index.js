import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Redux/Reducers";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Data = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={Data}>
    <App />
  </Provider>
);
