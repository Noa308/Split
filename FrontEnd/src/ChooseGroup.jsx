import { useContext } from "react";
import { GroupContext } from "./GroupContext";
import useGoToPath from "./useGoToPath";

const ChooseGroup = () => {
  const { groups } = useContext(GroupContext);

  const goToPath = useGoToPath();

  function handleChange(e) {
    const groupName = e.target.value;
    if (groupName) {
      goToPath(`/${groupName}`);
    }
  }

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
