function Expense({ id, title, amount, date, whoPay, howToSplit }) {
  const EQUALLY = "You paid, split equally";
  const FULL_AMOUNT = "You are owed the full amount";

  return (
    <div className={`grid grid-cols-6 py-2`}>
      <p>{id}</p>
      <p> {whoPay}</p>
      <p>{date}</p>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{howToSplit ? EQUALLY : FULL_AMOUNT}</p>
    </div>
  );
}

export default Expense;
