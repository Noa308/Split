import { useEffect, useState } from "react";

const useGetUsersFromAllGroups = () => {
  const [users, setUsers] = useState([]);

  const getUsersFromAllGroups = async () => {
    const response = await fetch(
      "http://localhost:3000/getUsers?" + new URLSearchParams({}).toString()
    );
    const userRes = await response.json();
    setUsers(userRes);
  };

  useEffect(() => {
    getUsersFromAllGroups();
  }, []);

  return users;
};

export default useGetUsersFromAllGroups;
