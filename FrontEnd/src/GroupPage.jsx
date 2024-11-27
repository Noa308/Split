import Expenses from "./Expenses";
import GroupInfo from "./GroupInfo";
import BackButton from "./BackButton";

function GroupPage({ id }) {
  return (
    <div>
      <BackButton path="/" text="Back to the home page 🔙" />
      <div className="flex flex-col items-center w-full">
        <GroupInfo id={id} />
        <Expenses id={id} />
      </div>
    </div>
  );
}

export default GroupPage;
