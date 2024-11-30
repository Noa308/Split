import { useState } from "react";
import Expense from "./Expense";
import AddExpense from "./AddExpense";

const Expenses = ({ id }) => {
  const [expenses, setExpenses] = useState([]);

  const orederdExpenses = expenses.map((expenses) => (
    <Expense
      key={expenses.id}
      id={expenses.id}
      title={expenses.name}
      amount={expenses.amount}
      date={expenses.date}
      whoPay={expenses.paid_by}
      howToSplit={expenses.split_equaly}
    />
  ));

  return (
    <div className="w-2/3 ">
      <AddExpense id={id} setExpenses={setExpenses} />
      <div className={`grid grid-cols-6 text-lg font-bold`}>
        <p>Expense Number</p>
        <p>Who Pay</p>
        <p>Expense date</p>
        <p>Title</p>
        <p>Expense Amount</p>
        <p>Splitting option</p>
      </div>
      <div className="py-2">{orederdExpenses}</div>
    </div>
  );
};

export default Expenses;
