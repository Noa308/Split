import { useEffect, useState } from "react";

const useGetUserName = (userId) => {
  const [name, setName] = useState("");
  const getUserName = async (userId) => {
    const response = await fetch(
      "http://localhost:3000/getUserName?" +
        new URLSearchParams({
          userId: userId,
        }).toString()
    );
    const UserNameRes = await response.json();
    setName(UserNameRes);
  };

  useEffect(() => {
    getUserName(userId);
  }, [userId]);

  return name;
};

export default useGetUserName;
