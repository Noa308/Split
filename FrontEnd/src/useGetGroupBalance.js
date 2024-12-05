import { useEffect, useState } from "react";

const useGetGroupBalance = (id) => {
  const [balance, setBalance] = useState([]);

  const getBalance = async (id) => {
    const response = await fetch(
      "http://localhost:3000/getGroupBalance?" +
        new URLSearchParams({
          groupId: id,
        }).toString()
    );
    const res = await response.json();
    setBalance(res);
  };
  useEffect(() => {
    getBalance(id);
  }, [id]);
  return balance;
};

export default useGetGroupBalance;
