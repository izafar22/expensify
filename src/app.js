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
const expenseOne = store.dispatch(
  addExpense({
    description: "water bill",
    amount: 900
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: "gas bill",
    createdAt: 1000
  })
);

const expenseThree = store.dispatch(
  addExpense({
    description: "rent",
    amount: 1095
  })
);

setTimeout(() => {
  store.dispatch(sortByDate());
}, 10000);

//store.dispatch(setTextFilter("gas"));

const state = store.getState();
console.log("state", store.getState());

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log("visible", visibleExpenses);

store.subscribe(() => {
  console.log(store.getState());
});
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
