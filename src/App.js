import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
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
  return (
    <div>
      <h2>Let's get started !</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
