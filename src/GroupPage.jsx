import Expenses from "./Expenses";
import GroupInfo from "./GroupInfo";
import UseBackButton from "./useBackButton";

function GroupPage() {
  return (
    <div>
      <UseBackButton path="/" text="Back to the home page 🔙" />
      <div className="flex flex-col items-center w-full">
        <GroupInfo />
        <Expenses />
      </div>
    </div>
  );
}

export default GroupPage;
