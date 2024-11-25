function Expense({ id, title, amount, date, whoPay, howToSplit, columnsSize }) {
  return (
    <div className={`grid grid-cols-${columnsSize} py-2`}>
      <p>{id}</p>
      <p> {whoPay}</p>
      <p>{date}</p>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{howToSplit}</p>
    </div>
  );
}

export default Expense;
