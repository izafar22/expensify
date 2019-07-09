import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action Object", () => {
  const action = removeExpense({ id: "1234abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "1234abc"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { description: "water" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: { description: "water" }
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "rent",
    amount: "109500",
    createdAt: 1000,
    note: "this was last months rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
