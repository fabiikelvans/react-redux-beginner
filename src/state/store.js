import { createStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index";
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk),
)

