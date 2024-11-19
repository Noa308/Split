import Expenses from "./Expenses";
import GroupInfo from "./GroupInfo";
import BackButton from "./BackButton";

function GroupPage() {
  return (
    <div>
      <BackButton path="/" text="Back to the home page 🔙" />
      <div className="flex flex-col items-center w-full">
        <GroupInfo />
        <Expenses />
      </div>
    </div>
  );
}

export default GroupPage;
