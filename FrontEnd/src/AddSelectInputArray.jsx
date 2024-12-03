import useGetUsers from "./useGetUsers";

const AddSelectInputArray = ({ text, setX, id }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setX(e.target.value);
  };
  const users = useGetUsers(id);
  return (
    <div>
      <label>{text}</label>
      <select
        className="bg-white border-black border-2"
        onChange={handleClick}
        id={text}
      >
        <option value="null" key="0">
          choose user
        </option>
        {users.map((ele) => (
          <option value={ele.user_id} key={ele.user_id}>
            {ele.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AddSelectInputArray;

{
  /* <p>{JSON.stringify(users)}</p> */
}
