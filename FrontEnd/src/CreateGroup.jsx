import { useState } from "react";

function CreateGroup({ setGroups }) {
  const [newgroupName, setNewgroupName] = useState("");
  const [message, setMessage] = useState("");

  const handleAddGroup = async () => {
    if (newgroupName) {
      await addGroup();
      setNewgroupName("");
      setMessage("");
    } else {
      setMessage("You need to enter the name of the group.");
    }
  };

  const addGroup = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const res = await fetch("http://localhost:3000/addGroup", {
      method: "POST",
      body: JSON.stringify({ groupName: newgroupName }),
      headers: myHeaders,
    });
    console.log(res);
    const res_json = await res.json();
    const id = res_json[0].id;
    setGroups((groups) => [...groups, { id: id, name: newgroupName }]);
    // in "Choose groups" its going to fetch the data from the backend and not to take it from the group state.
    // I'm updating the "groups" just to make sure the client will see his group even before he reafresh the page
  };

  return (
    <div>
      <label className="px-2 font-medium">Create a new group:</label>
      <input
        type="text"
        value={newgroupName}
        onChange={(e) => (setNewgroupName(e.target.value), setMessage(""))}
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
    </div>
  );
}

export default CreateGroup;
