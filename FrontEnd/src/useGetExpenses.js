import { useEffect, useState } from "react";

const useGetExpenses = (id) => {
  const [expenses, setExpenses] = useState([]);
  const getExpenses = async (id) => {
    const response = await fetch(
      "http://localhost:3000/getGroupExpenses?" +
        new URLSearchParams({
          groupId: id,
        }).toString()
    );
    const expenseRes = await response.json();
    setExpenses(expenseRes);
  };

  useEffect(() => {
    getExpenses(id);
  }, [id]);

  return expenses;
};

export default useGetExpenses;
