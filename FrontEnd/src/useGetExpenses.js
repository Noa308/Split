const useGetExpenses = ({ setExpenses }) => {
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
  return getExpenses;
};

export default useGetExpenses;
