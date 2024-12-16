const AddInput = ({
  text,
  setX,
  inputType = "text",
  size,
  placeHolderText,
}) => {
  return (
    <div>
      <label>{text}</label>
      <input
        type={inputType}
        size={size}
        onChange={(e) => {
          setX(e.target.value);
        }}
        placeholder={placeHolderText}
        className="bg-white border-black border-2"
      />
    </div>
  );
};

export default AddInput;
