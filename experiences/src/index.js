import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// importing rootReducer so our store variable that we pass to Provider as props can use the reducer's returned state
import { rootReducer } from "./reducers";
// importing createStore so we can create our global store, applyMiddleware is a method so we can use loggers and thunks, compose so we can use the redux tools
import { createStore, applyMiddleware, compose } from "redux";
// importing Provider so we can pass our store prop into it that'll give our inner components access to it
import { Provider } from "react-redux";
// importing Router so App can use match location history I think?
import { Router } from "react-router-dom";
// importing thunk so we can use the dispatch method manually within our thunk function that gets returned in our action creators
import thunk from "redux-thunk";
// importing logger so we can see the actions being dispatched and whether our calls were successful or not
import logger from "redux-logger";
// creating composeEnhancers variable that allows us to use redux tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create const store prop that links our store with our reducer, and links the middleware methods which intervene between action creators and actions like thunk and logger?
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
