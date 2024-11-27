import { useEffect, useState } from "react";
import Expense from "./Expense";

const Expenses = ({ id }) => {
  const [expenses, setExpenses] = useState([]);
  const [usersId, setUsersId] = useState([]);
  const [usersName, setUsersName] = useState("");

  const getUsers = async (id) => {
    const response = await fetch(
      "http://localhost:3000/getGroupUsers?" +
        new URLSearchParams({
          groupId: id,
        }).toString()
    );
    const userRes = await response.json();
    console.log(userRes);
    setUsersId(userRes);
  };

  useEffect(() => {
    getUsers(id);
    getExpenses(id);
  }, [id]);

  const getExpenses = async (id) => {
    const response = await fetch(
      "http://localhost:3000/getGroupExpenses?" +
        new URLSearchParams({
          groupId: id,
        }).toString()
    );
    const expenseRes = await response.json();
    console.log(expenseRes);
    setExpenses(expenseRes);
  };

  const getUserName = async (userId) => {
    const response = await fetch(
      "http://localhost:3000/getUserName?" +
        new URLSearchParams({
          groupId: userId,
        }).toString()
    );
    const UserNameRes = await response.json();
    console.log(UserNameRes);
    setUsersName(UserNameRes);
  };

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

  const handleChange = () => {};
  return (
    <div className="w-2/3 ">
      <label>Add new expense</label>
      <select onChange={handleChange}>
        <option value="null"></option>
        {/* {usersId.map(
          (user) => (
            getUserName(Number(user.user_id)),
            (
              <option key={user.user_id} value={usersName}>
                {usersName}
              </option>
            )
          )
        )} */}
        i dont need it, all i want is to add: id of who pay, date, expense
        title, expense amount , splitting and agter this in Expense component i
        will change the user id to name. the client will not see the user_id, he
        will see the users options (from /getGroupUsers) and then select it but
        we wil get the id
      </select>
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
