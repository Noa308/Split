import { useContext, useState } from "react";
import { GroupContext } from "./GroupContext";

function CreateGroup() {
  const [newGroupName, setNewGroupName] = useState("");
  const [message, setMessage] = useState("");
  const { groups, setGroups } = useContext(GroupContext);

  const handleAddGroup = () => {
    if (newGroupName && !groups.includes(newGroupName)) {
      setGroups([...groups, newGroupName]);
      setNewGroupName("");
      setMessage("");
    } else if (groups.includes(newGroupName)) {
      setMessage("You already added this group.");
    } else {
      setMessage("You need to enter the name of the group.");
    }
  };

  return (
    <div>
      <label className="px-2 font-medium">Create a new group:</label>
      <input
        type="text"
        value={newGroupName}
        onChange={(e) => (setNewGroupName(e.target.value), setMessage(""))}
        placeholder="Enter group name here"
      />
      <button
        className="bg-blue-300 rounded-md font-medium"
        type="button"
        onClick={handleAddGroup}
      >
        Add Group
      </button>
      <p className="text-red-600 font-medium">{message}</p>
      <ul className="px-4">
        {groups.map((group, index) => (
          <li key={index}>{group}</li>
        ))}
      </ul>
    </div>
  );
}

export default CreateGroup;
