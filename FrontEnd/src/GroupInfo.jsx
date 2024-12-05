import { useEffect, useState } from "react";
import useGetGroups from "./useGetGroups";
import useGetGroupBalance from "./useGetGroupBalance";
import ShowBalance from "./showBalance";

const GroupInfo = ({ id }) => {
  const [name, setName] = useState("");
  const getGroups = useGetGroups({ setName });
  const balance = useGetGroupBalance(id);

  useEffect(() => {
    getGroups(id);
  }, [id, getGroups]);

  return (
    <div className="flex flex-col items-center bg-blue-100 w-full">
      <p className="flex font-black text-2xl mt-5">{name}</p>
      <div className="mt-3 font-bold">
        {balance.map((user) => (
          <ShowBalance key={user.id} name={user.name} balance={user.balance} />
        ))}
      </div>
    </div>
  );
};

export default GroupInfo;
