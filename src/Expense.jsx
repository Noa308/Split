function Expense({ id, title, amount, date }) {
  return (
    <div className="grid grid-cols-4 py-2">
      <p>{id}</p>
      <p>{date}</p>
      <p>{title}</p>
      <p>{amount}</p>
    </div>
  );
}

export default Expense;
