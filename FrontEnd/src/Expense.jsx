function Expense({ id, title, amount, date, whoPay, howToSplit }) {
  return (
    <div className={`grid grid-cols-6 py-2`}>
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
