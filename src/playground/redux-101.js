import { createStore } from "redux";

// Action generators - functions that return action objects
// const incrementCount = () => {
// return {
//  type:'INCREMENT',
// }
// }

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy: decrementBy
});

const contReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case "SET":
      return {
        count: typeof action.count === "number" ? action.count : 0
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
};

const store = createStore(contReducer);
//watch changes on the store

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch({
//   type: "INCREMENT"
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
//Action is an object with a type field and its value is in caps thats the convention.

// {
//  type:'INCREMENT'
// }

store.dispatch({
  type: "INCREMENT"
});

store.dispatch({
  type: "RESET"
});

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch({
  type: "SET",
  count: 101
});
