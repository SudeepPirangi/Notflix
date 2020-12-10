import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as serviceWorker from "./serviceWorker";

import App from "./App";
import { theme } from "./custom-theme";
import "fontsource-roboto";
import "./index.css";

import flixReducer from "./store/reducers/flixReducer";
import authReducer from "./store/reducers/authReducer";

const rootReducer = combineReducers({
  flix: flixReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>,
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
