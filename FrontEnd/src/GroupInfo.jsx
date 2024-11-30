import { useEffect, useState } from "react";
import useGetGroups from "./useGetGroups";

const GroupInfo = ({ id }) => {
  const [name, setName] = useState("");

  const getGroups = useGetGroups({ setName });

  useEffect(() => {
    getGroups(id);
  }, [id, getGroups]);

  return (
    <div className="flex flex-col items-center bg-blue-100 w-full">
      <p className="flex font-black text-2xl mt-5">{name}</p>
      <p className="mt-3 font-bold"> X owes you Y dollar</p>
    </div>
  );
};

export default GroupInfo;
