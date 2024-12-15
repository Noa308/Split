import { useCallback } from "react";
//the useCallback cashing the addBalance function and not the content from a specific balance( cache how to create add balance and not a balance)
const useAddBalance = () => {
  const addBalance = useCallback(async (userId, newBalance, id) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    try {
      const res = await fetch("http://localhost:3000/addBalance", {
        method: "POST",
        body: JSON.stringify({
          userId: userId,
          newBalance: newBalance,
          groupId: id,
        }),
        headers: myHeaders,
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const res_json = res.headers
        .get("Content-Type")
        ?.includes("application/json")
        ? await res.json()
        : {}; // Default to an empty object if no JSON is returned

      console.log("Parsed response:", res_json);
    } catch (err) {
      console.error("Failed to execute addBalance:", err);
      throw err;
    }
  }, []);
  return addBalance;
};

export default useAddBalance;
