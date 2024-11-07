import Expense from "./Expense";

function Expenses() {
  const expenses = [
    { id: 1, title: "Super", amount: 15, date: "2023-01-04" },
    { id: 2, title: "Movie", amount: 5, date: "2024-03-04" },
    { id: 3, title: "Shopping", amount: 40, date: "2024-05-06" },
  ];
  const orederdExpenses = expenses.map((expenses) => (
    <Expense
      key={expenses.id}
      id={expenses.id}
      title={expenses.title}
      amount={expenses.amount}
      date={expenses.date}
    />
  ));
  return (
    <div className="w-2/3 ">
      <div className="grid grid-cols-4 text-lg font-bold">
        <p>Expense Number</p>
        <p>Expense date</p>
        <p>Title</p>
        <p>Expense Amount</p>
      </div>
      <div className="py-2">{orederdExpenses}</div>
    </div>
  );
}

export default Expenses;
