import CreateGroup from "./CreateGroup";
import ChooseGroup from "./ChooseGroup";
// import BackButton from "./BackButton";
import { useState } from "react";

function HomePage() {
  const [groups, setGroups] = useState([]);
  return (
    <div>
      {/* <BackButton path="/Groups" text="go to the groups page" /> */}
      <div className="flex flex-col items-center w-full">
        <p className="flex flex-col items-center bg-blue-100 w-full font-extrabold text-5xl p-7 ">
          Welcom to Split
        </p>
        <div className="p-4">
          <CreateGroup setGroups={setGroups} />
          <ChooseGroup groups={groups} setGroups={setGroups} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
