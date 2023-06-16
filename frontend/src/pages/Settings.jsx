import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Menu from "../components/Menu";
import { logUserOut } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";

export default function SettingsPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const handleClick = async (e) => {
    console.log("clicked");
    const [data, error] = await logUserOut();
  };

  if (!currentUser) return <Navigate to="/landing" />;

  return (
    <div>
      <Menu />
      <button name="logout" id="logout" onClick={handleClick}>
        Logout
      </button>
    </div>
  );
}
