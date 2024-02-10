import React, { useState } from "react";
import UserContext from "./Usercontext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [bgcolor, setbgColor] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser, bgcolor, setbgColor }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
