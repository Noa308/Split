import Expenses from "./Expenses";
import GroupInfo from "./GroupInfo";
import BackButton from "./BackButton";
import AddNewUserInGroup from "./AddNewUserInGroup";

function GroupPage({ id }) {
  return (
    <div>
      <BackButton path="/" text="Back to the home page 🔙" />
      <div className="flex flex-col items-center w-full">
        <GroupInfo id={id} />
        <AddNewUserInGroup id={id} />
        <Expenses id={id} />
      </div>
    </div>
  );
}

export default GroupPage;
