import { useCallback } from "react";
//the useCallback cashing the AddUser function and not the content from a specific user

const useAddUserToGroup = () => {
  const addUserToGroup = useCallback(async (userId, groupId) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    try {
      const res = await fetch("http://localhost:3000/addUserToGroup", {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          groupId: groupId,
        }),
        headers: myHeaders,
      });
      console.log(res);
    } catch (err) {
      console.error("Failed to execute addBalance:", err);
      throw err;
    }
  }, []);
  return addUserToGroup;
};

export default useAddUserToGroup;
