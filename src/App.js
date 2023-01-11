import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Welcome",
    amount: 2000.2,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New House",
    amount: 50000,
    date: new Date(2021, 2, 24),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 260000,
    date: new Date(2022, 3, 12),
  },
  {
    id: "e4",
    title: "School",
    amount: 20101,
    date: new Date(1991, 5, 11),
  },
];

const  App = () => {

   const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started"),
  //   React.createElement(Expenses, { items: expenses })
  // );
   return (
      <div>
       <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses}/>

      </div>
    );
}

export default App;
