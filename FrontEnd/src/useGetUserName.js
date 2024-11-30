const useGetUserName = ({ setUsersNames }) => {
  const getUserName = async (userId) => {
    const response = await fetch(
      "http://localhost:3000/getUserName?" +
        new URLSearchParams({
          userId: userId,
        }).toString()
    );
    const UserNameRes = await response.json();
    console.log(UserNameRes);
    setUsersNames([...UserNameRes]);
  };
  return getUserName;
};

export default useGetUserName;
