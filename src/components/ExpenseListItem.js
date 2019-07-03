import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
  <div>
    <h3>{description}</h3>
    <p>
      amount:{amount}-{createdAt}
    </p>
    <button
      onClick={props => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
