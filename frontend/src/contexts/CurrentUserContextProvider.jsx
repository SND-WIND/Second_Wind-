import { useState } from "react";
import CurrentUserContext from "./current-user-context";

export default function CurrentUserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [accountType, setAccountType] = useState(null);
  const context = {
    currentUser,
    setCurrentUser,
    accountType,
    setAccountType,
  };

  return (
    <CurrentUserContext.Provider value={context}>
      {children}
    </CurrentUserContext.Provider>
  );
}
