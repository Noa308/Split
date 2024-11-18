import { useContext } from "react";
import { GroupContext } from "./GroupContext";

function ChooseGroup() {
  const { groups } = useContext(GroupContext);

  return (
    <div>
      <label className="px-2 font-medium"> Choose your group:</label>
      <select>
        <option value="null"></option>
        {groups.map((group, index) => (
          <option key={index} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ChooseGroup;
