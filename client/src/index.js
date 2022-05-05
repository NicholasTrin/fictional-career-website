import React from "react";
import * as ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import "materialize-css/dist/css/materialize.min.css";

import combineReducers from './reducers';
import App from "./elements/App";

const store = configureStore({
  reducer: combineReducers
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);