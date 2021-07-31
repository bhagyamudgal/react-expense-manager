import React, { useState} from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2020, 7, 14),
//   },
//   {
//     id: "e2",
//     title: "New TV OLED",
//     amount: 799.49,
//     date: new Date(2021, 7, 2),
//   },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 5, 12),
//   },
// ];

const DUMMY_EXPENSES = [];

const App = () => {
  if (localStorage.getItem("expenses") === null) {
    localStorage.setItem("expenses", JSON.stringify(DUMMY_EXPENSES));
  }
  const Expenses_Storage = JSON.parse(localStorage.getItem("expenses"));
  Expenses_Storage.map((expense) => {
    return (expense.date = new Date(expense.date));
  });

  const [expenses, setExpenses] = useState(Expenses_Storage);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    Expenses_Storage.push(expense);
    // DUMMY_EXPENSES.push(expense);
    localStorage.setItem("expenses", JSON.stringify(Expenses_Storage));
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
