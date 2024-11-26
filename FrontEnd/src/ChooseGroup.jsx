import { useContext, useEffect, useState } from "react";
import { GroupContext } from "./GroupContext";
import useGoToPath from "./useGoToPath";

const ChooseGroup = () => {
  const { groups } = useContext(GroupContext);
  const [groupsData, setGroupsData] = useState(null);
  const goToPath = useGoToPath();

  const handleChange = (e) => {
    const groupName = e.target.value;
    if (groupName) {
      goToPath(`/${groupName}`);
    }
  };

  const getGroups = async () => {
    const response = (await fetch("localhost:3000/getGroups")).json();
    console.log(response);
    setGroupsData(response);
  };

  useEffect(() => {
    getGroups();
  }, []);

  return (
    <div>
      <label className="px-2 font-medium">Choose your group:</label>
      <select onChange={handleChange}>
        <option value="null">Select a group</option>
        {groups.map((group, index) => (
          <option key={index} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChooseGroup;
