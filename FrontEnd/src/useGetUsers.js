import { useEffect, useState } from "react";

const useGetUsers = (id) => {
  const [users, setUsers] = useState([]);

  const getUsers = async (id) => {
    const response = await fetch(
      "http://localhost:3000/getGroupUsers?" +
        new URLSearchParams({
          groupId: id,
        }).toString()
    );
    const userRes = await response.json();
    console.log(userRes);
    setUsers(userRes);
  };

  useEffect(() => {
    getUsers(id);
  }, [id]);

  return users;
};

export default useGetUsers;
