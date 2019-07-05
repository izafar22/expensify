import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";

const EditExpensePage = props => {
  console.log("----", props);
  return (
    <ExpenseForm
      expense={props.expense}
      onSubmit={expense => {
        console.log("dumped", expense);
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push("/");
      }}
    />
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(item => item.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
