import Expense from "./Expense";
import CreateExpense from "./CreateExpense";
import useGetExpenses from "./useGetExpenses";
import { useEffect, useState } from "react";

const Expenses = ({ id }) => {
  const expenses = useGetExpenses(id);
  const [expensesToShow, setExpensesToShow] = useState([]);

  useEffect(() => {
    setExpensesToShow(expenses);
  }, [expenses]);

  const orederdExpenses = expensesToShow.map((expenses) => (
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
      {console.log(expenses)}
      {console.log(expensesToShow)}
      <CreateExpense id={id} setExpensesToShow={setExpensesToShow} />
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
