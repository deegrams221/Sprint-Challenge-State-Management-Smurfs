import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducers';
import thunk from 'redux-thunk';

// for redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// createStore pass in reducer
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  rootElement
);