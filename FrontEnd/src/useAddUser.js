import { useCallback } from "react";
//the useCallback cashing the AddUser function and not the content from a specific user

const useAddUser = () => {
  const addUser = useCallback(async (userName) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const res = await fetch("http://localhost:3000/addUser", {
      method: "POST",
      body: JSON.stringify({
        userName: userName,
      }),
      headers: myHeaders,
    });
    console.log(res);
    const res_json = await res.json();
    console.log(res_json);
  }, []);
  return addUser;
};

export default useAddUser;
