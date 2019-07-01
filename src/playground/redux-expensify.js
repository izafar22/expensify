import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
  };
};
//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => {
  return {
    type: "REMOVE_EXPENSE",
    id
  };
};
//EDIT_EXPENSE

const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates
  };
};
//SET_TEXT_FILTER

const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text
  };
};
//SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_AMOUNT"
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});
//SET_START_DATE
const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});
//SET_END_DATE
const setEndDate = endDate => ({
  type: "SET_START_DATE",
  endDate
});
//defaultexpense reducer state
const expensesReducerDefaultState = [];
//filters reducer
//text set to empty string
//sortby starting of at date
//satrt date
//end date
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
//filters reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        startDate: action.endDate
      };
    default:
      return state;
  }
};

//Expenses Reducer

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
//timestamps
//33400,-203
//get Visible expense
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description.toLowerCase().includes(text);

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

//create store

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log("the dATA", visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 1000, createdAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: -1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));
//store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter(""));
store.dispatch(sortByAmount());

//store.dispatch(setStartDate(-10));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(-230));

const demoState = {
  expenses: [
    {
      id: "jdsjk",
      description: "janyry rent",
      note: "this ws the final payment",
      amout: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

console.log("the expensify app");

const user = {
  name: "Andam",
  age: 89
};
console.log("raghu");
console.log({ ...user, gender: "male" });
