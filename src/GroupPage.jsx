import Expenses from "./Expenses";
import GroupInfo from "./GroupInfo";

function GroupPage() {
  return (
    <div className="flex flex-col items-center w-full">
      <GroupInfo />
      <Expenses />
    </div>
  );
}

export default GroupPage;
