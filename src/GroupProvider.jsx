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
