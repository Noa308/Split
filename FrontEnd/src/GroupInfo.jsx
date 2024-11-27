import { useEffect, useState } from "react";

const GroupInfo = ({ id }) => {
  const [name, setName] = useState("");
  const getGroups = async (id) => {
    const response = await fetch(
      "http://localhost:3000/getGroupName?" +
        new URLSearchParams({
          groupId: id,
        }).toString()
    );
    const res = await response.json();
    setName(res[0].name);
  };

  useEffect(() => {
    getGroups(id);
  }, [id]);

  return (
    <div className="flex flex-col items-center bg-blue-100 w-full">
      <p className="flex font-black text-2xl mt-5">{name}</p>
      <p className="mt-3 font-bold"> X owes you Y dollar</p>
    </div>
  );
};

export default GroupInfo;
