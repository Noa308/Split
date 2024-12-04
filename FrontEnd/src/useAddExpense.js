import { useCallback } from "react";
//the useCallback cashing the addExpense function and not the content from a specific expense( cache how to create add expense and not an expense)

const useAddExpense = () => {
  const addExpenses = useCallback(
    async (expenseName, amount, date, whoPay, splitEqualy, id) => {
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
    },
    []
  );
  return addExpenses;
};

export default useAddExpense;
