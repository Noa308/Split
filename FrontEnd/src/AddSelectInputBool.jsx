const AddSelectInputBool = ({ text, setX }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.target.value === "true" ? setX(true) : setX(false);
  };
  return (
    <div>
      <label>{text}</label>
      <select
        className="bg-white border-black border-2"
        onChange={handleClick}
        id={text}
      >
        <option value="true">split equally</option>
        <option value="false">I am owed the full amount</option>
      </select>
    </div>
  );
};

export default AddSelectInputBool;
