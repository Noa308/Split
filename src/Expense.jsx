function Expense({ id, title, amount, date }) {
  return (
    <div className="flex flex-row space-x-4">
      <p>{id}</p>
      <p>{date}</p>
      <p>{title}</p>
      <p>{amount}</p>
    </div>
  );
}

export default Expense;
