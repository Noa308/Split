import { useState } from "react";
import { GroupContext } from "./GroupContext";

export const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  return (
    <GroupContext.Provider value={{ groups, setGroups }}>
      {children}
    </GroupContext.Provider>
    //this way all the children have an access to this value. the children come from the App.
  );
};
//to do: the back button
//to do: costome hook to the group from the groups, we will call it useGroup
//to create id to each group and to get the ud and give the group
