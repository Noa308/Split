import { useState } from "react";
import AddInput from "./AddInput";
import AddSelectInputBool from "./AddSelectInputBool";
import AddExpense from "./AddExpense";
import AddSelectInputArray from "./AddSelectInputArray";
import useGetUsersFromAGroup from "./useGetUsersFromAGroup";

const CreateExpense = ({ id, setExpensesToShow, setBalanceToShow }) => {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(2011 - 10 - 10);
  const [whoPay, setWhopPay] = useState("");
  const [splitEqualy, setSplitEqualy] = useState(true);
  const [message, setMessage] = useState("");
  const users = useGetUsersFromAGroup(id);

  return (
    <div>
      <p className="font-bold text-blue-400 text-lg">Add new expense:</p>
      <AddInput text={"Add title: "} setX={setExpenseName} size="30" />
      <AddInput text={"Add amount: "} setX={setAmount} size="16" />
      <AddInput text={"Add date: "} setX={setDate} size="18" />
      <AddSelectInputBool text={"How to split? "} setX={setSplitEqualy} />
      <AddSelectInputArray
        text={"Who pay: "}
        setX={setWhopPay}
        id={id}
        users={users}
      />
      {users.length > 0 ? (
        <AddExpense
          expenseName={expenseName}
          amount={amount}
          date={date}
          whoPay={whoPay}
          splitEqualy={splitEqualy}
          setMessage={setMessage}
          id={id}
          setExpensesToShow={setExpensesToShow}
          users={users}
          setBalanceToShow={setBalanceToShow}
        />
      ) : (
        <AddExpense
          expenseName={expenseName}
          amount={amount}
          date={date}
          whoPay={whoPay}
          splitEqualy={splitEqualy}
          setMessage={setMessage}
          id={id}
          setExpensesToShow={setExpensesToShow}
          // here i didn't pass the users
        />
      )}
      <p className="text-red-600">{message}</p>
    </div>
  );
};

export default CreateExpense;
