const useAddExpense = () => {
  // need to do usecallback
  const addExpenses = async (
    expenseName,
    amount,
    date,
    whoPay,
    splitEqualy,
    id
  ) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const res = await fetch("http://localhost:3000/addExpense", {
      method: "POST",
      body: JSON.stringify({
        expenseName: expenseName,
        amount: amount,
        date: date,
        whoPay: whoPay,
        splitEqualy: splitEqualy,
        groupId: id,
      }),
      headers: myHeaders,
    });
    console.log(res);
    const res_json = await res.json();
    console.log(res_json);
    return res_json[0].id;
  };

  return addExpenses;
};

export default useAddExpense;
