import { useState } from "react";
import useAddUserToGroup from "./useAddUserToGroup";
import AddSelectInputArray from "./AddSelectInputArray";
import useGetUsersFromAllGroups from "./useGetUsersFromAllGroups";

const AddNewUserInGroup = ({ id }) => {
  const AddUserToGroup = useAddUserToGroup();
  const [user, setUser] = useState("");
  const users = useGetUsersFromAllGroups();

  const handleOnClick = async () => {
    const returningId = await AddUserToGroup(user, id);
    console.log(returningId);
  };

  return (
    <div>
      <p className="font-bold text-blue-400 text-lg">
        Add new user to this groups:
      </p>
      <div className="flex ">
        <AddSelectInputArray
          text={"Choose user: "}
          setX={setUser}
          id={id}
          users={users}
          idType="id"
        />
        <button
          className="bg-blue-300 rounded-md font-bold mx-2"
          type="button"
          onClick={handleOnClick}
        >
          Add user
        </button>
      </div>
    </div>
  );
};

export default AddNewUserInGroup;
