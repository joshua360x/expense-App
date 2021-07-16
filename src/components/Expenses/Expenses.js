import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
  const filterChnageHandler = (selectedYear) => {
    setEnteretedYear(selectedYear);
  };



  const [enteredYear, setEnteretedYear] = useState("2020");
  // const title = expenses[0].title
  // const amount = expenses[0].amount


  // this is another way of running the code
  // let expensesContent = <p>No expenses found.</p>

  // if (filteredExpenses.length > 0) {
  //   expensesContent =( filterdExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ))) 
  // }


  const filterdExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === enteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={enteredYear}
          onChangeFilter={filterChnageHandler}
        />
        <ExpensesChart expenses={filterdExpenses} />
<ExpensesList items={filterdExpenses} />

        {/* this is one way of doing conditional content */}
       {/* {filterdExpenses.length === 0 && <p>No expenses found</p>}
        {filterdExpenses.length > 0 && ( filterdExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )))} */}
        
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expenses;
