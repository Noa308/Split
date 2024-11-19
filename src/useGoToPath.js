import { useNavigate } from "react-router-dom";

function useGoToPath() {
  const navigate = useNavigate();

  return (path) => navigate(path);
  //that return make it reusable for any path any time. if i move path as a prop its not working.
}

export default useGoToPath;
