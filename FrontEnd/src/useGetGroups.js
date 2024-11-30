const useGetGroups = ({ setName }) => {
  const getGroups = async (id) => {
    const response = await fetch(
      "http://localhost:3000/getGroupName?" +
        new URLSearchParams({
          groupId: id,
        }).toString()
    );
    const res = await response.json();
    setName(res[0].name);
  };
  return getGroups;
};

export default useGetGroups;
