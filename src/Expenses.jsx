import Expense from "./Expense";

const EQUALLY = "You paid, split equally";
const FULL_AMOUNT = "You are owed the full amount";

function Expenses() {
  const expenses = [
    {
      id: 1,
      title: "Super",
      amount: 15,
      date: "2023-01-04",
      whoPay: "Gilad",
      howToSplit: EQUALLY,
    },
    {
      id: 2,
      title: "Movie",
      amount: 5,
      date: "2024-03-04",
      whoPay: "Noa",
      howToSplit: FULL_AMOUNT,
    },
    {
      id: 3,
      title: "Shopping",
      amount: 40,
      date: "2024-05-06",
      whoPay: "Gilad",
      howToSplit: EQUALLY,
    },
  ];
  const columnsSize = Object.keys(expenses[0]).length;
  console.log(columnsSize);
  const orederdExpenses = expenses.map((expenses) => (
    <Expense
      key={expenses.id}
      id={expenses.id}
      title={expenses.title}
      amount={expenses.amount}
      date={expenses.date}
      whoPay={expenses.whoPay}
      howToSplit={expenses.howToSplit}
      columnsSize={columnsSize}
    />
  ));
  return (
    <div className="w-2/3 ">
      <div className={`grid grid-cols-${columnsSize} text-lg font-bold`}>
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
}

export default Expenses;
