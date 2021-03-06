import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import './index.css';
import EvernoteClone from './EvernoteClone';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import store from "./stores"

ReactDOM.render(
  
  <React.StrictMode>
    <Provider store ={store}>
        {/* <Router>
        <Route path="/home"> */}
          <EvernoteClone />
        {/* </Route>
        </Router> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
