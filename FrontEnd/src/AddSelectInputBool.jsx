import { useState } from "react";

const AddSelectInputBool = ({ text, setX }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setVal(e.target.value);
    val === "true" ? setBollVal(true) : setBollVal(false);
    setX(bool_val);
  };
  const [val, setVal] = useState("");
  const [bool_val, setBollVal] = useState(true);
  return (
    <div>
      <label>{text}</label>
      <select
        className="bg-white border-black border-2"
        onChange={handleClick}
        id={text}
      >
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
    </div>
  );
};

export default AddSelectInputBool;
