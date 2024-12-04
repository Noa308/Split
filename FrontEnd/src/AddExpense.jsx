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
}) {
  const addExpense = useAddExpense();
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
