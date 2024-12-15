import useAddBalance from "./useAddBalance";

const useChangeUserBalance = () => {
  const addBalance = useAddBalance();

  const changeUserBalance = async (
    user,
    splitEqualy,
    formerBalance,
    amount,
    numOfUsers,
    whoPay,
    id
  ) => {
    const index = formerBalance.findIndex((obj) => obj.id === user.user_id);
    const formerBalanceToUser = formerBalance[index]?.balance || 0;

    console.log("Calculating new balance for user:", user);
    console.log("Split equally:", splitEqualy);
    console.log("Former balance for user:", formerBalanceToUser);
    console.log("Amount:", amount);
    console.log("Number of users:", numOfUsers);
    console.log("Who paid:", whoPay);

    let updatedBalance = formerBalanceToUser;

    if (whoPay === user.user_id && numOfUsers > 0) {
      updatedBalance += splitEqualy ? amount - amount / numOfUsers : amount;
      console.log("if");
    } else if (whoPay !== user.user_id && numOfUsers > 1) {
      updatedBalance -= splitEqualy
        ? amount / numOfUsers
        : amount / (numOfUsers - 1);
      console.log("else if");
    } else {
      console.log("you need to enter more users to this group");
    }

    await addBalance(Number(user.user_id), updatedBalance, Number(id)).catch(
      (err) =>
        console.error(
          "Failed to update balance for user:",
          user.user_id,
          "error:",
          err
        )
    );
  };

  return changeUserBalance;
};

export default useChangeUserBalance;
