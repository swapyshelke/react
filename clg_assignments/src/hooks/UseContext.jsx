import React, { useContext, useState } from "react";

const UserContext = useContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState({
    name: "Swapnil shelke",
  });

  const updateUser = (newName) => {
        setUser({name: newUpdate})
  }

  return 
  <UserContext.Provider value={{user, updateUser}}>
{children}
  </UserContext.Provider>
};

export {UseContext,UserProvider }
