import { useState, useEffect } from "react";
import CurrentUserContext from "./current-user-context";
import { checkForLoggedInUser } from "../adapters/auth-adapter";

export default function CurrentUserContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [accountType, setAccountType] = useState(null);

  useEffect(() => {
    async function getCurrentUser() {
      const user = await checkForLoggedInUser();
      console.log(user);
      setAccountType(user.type);
    }
    getCurrentUser();
  }, []);

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
