import Expenses from "./Expenses";
import GroupInfo from "./GroupInfo";
import BackButton from "./BackButton";
import AddNewUserInGroup from "./AddNewUserInGroup";
import useGetGroupBalance from "./useGetGroupBalance";
import useGetUsersFromAGroup from "./useGetUsersFromAGroup";
import { useEffect, useState } from "react";

function GroupPage({ id }) {
  const balance = useGetGroupBalance(id);
  const [balanceToShow, setBalanceToShow] = useState(balance);
  const users = useGetUsersFromAGroup(id);
  const [usersToShow, setUsersToShow] = useState(users);

  useEffect(() => {
    setBalanceToShow(balance);
  }, [balance]);

  useEffect(() => {
    setUsersToShow(users);
    console.log(users);
  }, [users]);

  return (
    <div>
      <BackButton path="/" text="Back to the home page 🔙" />
      <div className="flex flex-col items-center w-full">
        <GroupInfo id={id} balanceToShow={balanceToShow} />
        <AddNewUserInGroup id={id} setUsersToShow={setUsersToShow} />
        <Expenses
          id={id}
          setBalanceToShow={setBalanceToShow}
          balanceToShow={balanceToShow}
          usersToShow={usersToShow}
        />
      </div>
    </div>
  );
}

export default GroupPage;
