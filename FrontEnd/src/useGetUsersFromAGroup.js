import { useEffect, useState } from "react";

const useGetUsersFromAGroup = (id) => {
  const [users, setUsers] = useState([]);

  const getUsersFromAGroup = async (id) => {
    const response = await fetch(
      "http://localhost:3000/getGroupUsers?" +
        new URLSearchParams({
          groupId: id,
        }).toString()
    );
    const userRes = await response.json();
    setUsers(userRes);
  };

  useEffect(() => {
    getUsersFromAGroup(id);
  }, [id]);

  return users;
};

export default useGetUsersFromAGroup;
