const ShowBalance = ({ name, balance }) => {
  return (
    <div>
      user: {name} , balance: {balance ? balance.toFixed(2) : balance}
    </div>
  );
};

export default ShowBalance;
