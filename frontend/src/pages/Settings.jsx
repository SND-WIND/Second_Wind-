import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Menu from "../components/Menu";
import { logUserOut, deleteAccount } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";

export default function SettingsPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const handleClick = async (e) => {
    console.log("clicked");
    const [data, error] = await logUserOut();
  };

  const handleTerminate = async () => {
    if (window.confirm("Are you sure you want to leave us?")) {
      try {
        await deleteAccount();
        setCurrentUser(null);
        navigate("/landing");
      } catch (error) {
        console.error("Failed to terminate account:", error);
      }
    }
  };

  if (!currentUser) return <Navigate to="/landing" />;

  return (
    <div>
      <Menu />
      <button name="logout" id="logout" onClick={handleLogout}>
        Logout
      </button>
      <button name="terminate" id="terminate" onClick={handleTerminate}>
        Terminate Account
      </button>
    </div>
  );
}