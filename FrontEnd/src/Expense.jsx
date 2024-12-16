import useGetUserName from "./useGetUserName";

function Expense({ id, title, amount, date, whoPay, howToSplit }) {
  const EQUALLY = "You paid, split equally";
  const FULL_AMOUNT = "You are owed the full amount";
  const name = useGetUserName(whoPay);
  const dateAsDate = new Date(date);
  return (
    <div className={`grid grid-cols-6 py-2`}>
      <p>{id}</p>
      {name ? (
        <p>{JSON.stringify(name[0].name).slice(1, -1)}</p>
      ) : (
        <p>no name</p>
      )}
      <p>{`${dateAsDate.getDay()}-${
        dateAsDate.getMonth() + 1
      }-${dateAsDate.getFullYear()}`}</p>
      <p>{title}</p>
      <p>{amount}</p>
      <p>{howToSplit ? EQUALLY : FULL_AMOUNT}</p>
    </div>
  );
}

export default Expense;
