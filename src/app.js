// stateless functional component
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { addExpense, editExpense } from "./actions/expenses";
//import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import AppRouter from "./routers/AppRouter";
import "./styles/styles.scss";
import { setTextFilter, sortByDate } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

//AddExpense

//store.dispatch(setTextFilter("gas"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
