import Expenses from "./Expenses";
import GroupInfo from "./GroupInfo";
import BackButton from "./BackButton";
import AddNewUserInGroup from "./AddNewUserInGroup";
import useGetGroupBalance from "./useGetGroupBalance";
import { useEffect, useState } from "react";

function GroupPage({ id }) {
  const balance = useGetGroupBalance(id);
  const [balanceToShow, setBalanceToShow] = useState(balance);

  useEffect(() => {
    setBalanceToShow(balance);
  }, [balance]);

  return (
    <div>
      <BackButton path="/" text="Back to the home page 🔙" />
      <div className="flex flex-col items-center w-full">
        <GroupInfo id={id} balanceToShow={balanceToShow} />
        <AddNewUserInGroup id={id} />
        <Expenses
          id={id}
          setBalanceToShow={setBalanceToShow}
          balanceToShow={balanceToShow}
        />
      </div>
    </div>
  );
}

export default GroupPage;
