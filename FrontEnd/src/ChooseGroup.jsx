import { useEffect } from "react";
import useGoToPath from "./useGoToPath";

const ChooseGroup = ({ groups, setGroups }) => {
  const goToPath = useGoToPath();

  const handleChange = (e) => {
    const groupName = e.target.value;
    if (groupName) {
      goToPath(`/${groupName}`);
    }
  };

  useEffect(() => {
    const getGroups = async () => {
      const response = await fetch("http://localhost:3000/getGroups", {});
      const res = await response.json();
      setGroups(res);
    };
    getGroups();
  }, [setGroups]);

  return (
    <div>
      <label className="px-2 font-medium">Choose your group:</label>
      <select onChange={handleChange}>
        <option value="null">Select a group</option>
        {groups.map((group) => (
          <option key={group.id} value={group.name}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default ChooseGroup;
