import useChangeUserBalance from "./useChangeUserBalance";
import useAddExpense from "./useAddExpense";

function AddExpense({
  id,
  expenseName,
  amount,
  date,
  whoPay,
  splitEqualy,
  setMessage,
  setExpensesToShow,
  users = [],
  setBalanceToShow,
  balanceToShow,
}) {
  const addExpense = useAddExpense();
  const changeUserBalance = useChangeUserBalance();
  const numOfUsers = users.length;
  const handleOnClick = async () => {
    if (
      expenseName &&
      amount &&
      date &&
      whoPay &&
      [true, false].includes(splitEqualy) &&
      id
    ) {
      setMessage("");
      const returningId = await addExpense(
        expenseName,
        amount,
        date,
        whoPay,
        splitEqualy,
        id
      );
      setExpensesToShow((expenses) => [
        ...expenses,
        {
          id: returningId,
          name: expenseName,
          amount,
          date,
          paid_by: whoPay,
          split_equaly: splitEqualy,
          group_id: id,
        },
      ]);
      if (users.length > 0 && balanceToShow) {
        let calculatingBalance = [];
        for (let user of users.filter((user) => user && user.user_id)) {
          const updatedBalance = await changeUserBalance(
            user,
            splitEqualy,
            balanceToShow,
            amount,
            numOfUsers,
            whoPay,
            id
          );
          calculatingBalance.push({
            id: user.user_id,
            name: user.name,
            balance: updatedBalance,
          });
        }
        setBalanceToShow(calculatingBalance);
      }
    } else {
      setMessage("You need to fill all the fields");
    }
  };

  return (
    <div>
      <button
        onClick={handleOnClick}
        className="font-bold bg-blue-400 rounded-md"
      >
        Add
      </button>
    </div>
  );
}

export default AddExpense;
