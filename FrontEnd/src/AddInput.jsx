const AddInput = ({ text, setX, inputType = "text", size }) => {
  return (
    <div>
      <label>{text}</label>
      <input
        type={inputType}
        size={size}
        onChange={(e) => {
          setX(e.target.value);
        }}
        className="bg-white border-black border-2"
      />
    </div>
  );
};

export default AddInput;
