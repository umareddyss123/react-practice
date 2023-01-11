import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {/* <ExpensesFilter
      selected={filteredyear} onChangeFilter={filterChangedHandler}/> */}
      {props.items.map((expense, index ) => (
      <ExpenseItem 
      key= {expense.id}
      title={expense.title}
       amount={expense.amount} 
       date={expense.date}/>
      ))}
  
    </Card>
  );
}
export default Expenses;
