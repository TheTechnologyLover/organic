import React from "react";
import Routes from "./Routes";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import cartReducer from "./store/reducer/cart";
import userReducer from "./store/reducer/user";

const store = createStore(
  combineReducers({
    cart : cartReducer,
    user : userReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
 
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
