import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./rootreducer";

let myStore = createStore(rootReducer);
// console.log(myStore);

ReactDOM.render(<Provider store={myStore}><Main /></Provider>, document.querySelector("#react-root"));