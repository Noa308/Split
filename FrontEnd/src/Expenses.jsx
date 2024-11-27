import { useEffect, useState } from "react";
import Expense from "./Expense";

const Expenses = ({ id }) => {
  const [expenses, setExpenses] = useState([]);

  const getExpenses = async (id) => {
    const response = await fetch(
      "http://localhost:3000/getGroupExpenses?" +
        new URLSearchParams({
          groupId: id,
        }).toString()
    );
    const res = await response.json();
    console.log(res);
    setExpenses(res);
  };

  useEffect(() => {
    getExpenses(id);
  }, [id]);

  // const expenses = [
  //   {
  //     id: 1,
  //     title: "Super",
  //     amount: 15,
  //     date: "2023-01-04",
  //     whoPay: "Gilad",
  //     howToSplit: EQUALLY,
  //   },
  //   {
  //     id: 2,
  //     title: "Movie",
  //     amount: 5,
  //     date: "2024-03-04",
  //     whoPay: "Noa",
  //     howToSplit: FULL_AMOUNT,
  //   },
  //   {
  //     id: 3,
  //     title: "Shopping",
  //     amount: 40,
  //     date: "2024-05-06",
  //     whoPay: "Gilad",
  //     howToSplit: EQUALLY,
  //   },
  // ];
  // const columnsSize = Object.keys(expenses[0]).length;

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
