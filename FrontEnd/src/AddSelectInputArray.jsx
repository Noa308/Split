const AddSelectInputArray = ({ text, setX, users, idType = "user_id" }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setX(e.target.value);
  };
  return (
    <div>
      <label>{text}</label>
      <select
        className="bg-white border-black border-2"
        onChange={handleClick}
        id={text}
        key={text}
      >
        <option value="null" key="0">
          choose user
        </option>
        {idType === "id"
          ? users.map((ele) => (
              <option value={ele.id} key={ele.id}>
                {ele.name}
              </option>
            ))
          : users.map((ele) => (
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
