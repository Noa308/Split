import { useParams } from "react-router";
import GroupPage from "./GroupPage";

const GrouptId = () => {
  const { id } = useParams();
  return (
    <div>
      <GroupPage id={id} />
    </div>
  );
};

export default GrouptId;
