import React from "react";
import { removeExpense } from "../actions/expenses";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
const ExpenseListItem = ({
  description,
  amount,
  createdAt,
  id,
  dispatch,
  history
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>

    <p>
      amount:{numeral(amount).format("$0,0.00")}-
      {moment(createdAt).format("MMMM Do, YYYY")}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
