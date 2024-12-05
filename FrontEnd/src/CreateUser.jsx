import { useState } from "react";
import useAddUser from "./useAddUser";

const CreateUser = () => {
  const [userName, setUserName] = useState("");
  const AddUser = useAddUser();

  const handleOnClick = async () => {
    await AddUser(userName);
  };

  return (
    <div className="my-4">
      <label className="text-lg px-2 font-medium">create a new user: </label>
      <input
        className="border-2"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <button
        className="bg-blue-300 rounded-md font-medium mx-2"
        type="button"
        onClick={handleOnClick}
      >
        Add user
      </button>
    </div>
  );
};

export default CreateUser;
