import { useNavigate } from "react-router-dom";

function UseBackButton({ path, text }) {
  let navigate = useNavigate();

  return (
    <p className="font-extrabold bg-blue-100 ">
      <button className="underline" onClick={() => navigate(path)}>
        {text}
      </button>
    </p>
  );
}

export default UseBackButton;

//this is a custom hook
