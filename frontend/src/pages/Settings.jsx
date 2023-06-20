import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Menu from "../components/Menu";
import { logUserOut, deleteAccount } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import '../styles/reset.css'
import '../styles/Settings.css'
import SettingsForm1 from "../components/SettingsForm1";
import SettingsForm2 from "../components/SettingsForm2";
import Horizantal from "../components/Horizantal";

export default function SettingsPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const handleLogout = async (e) => {
    await logUserOut();
    setCurrentUser(null);
    navigate("/landing");
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
    <div className="settings">
      <Menu />
      <div>
      <SettingsForm1 />
      <Horizantal color="pink" />
      {/*<SettingsForm2 />
       <div className="settings-forms">
        </div> */}
      <button name="logout" id="logout" onClick={handleLogout}>
        Logout
      </button>
      <button name="terminate" id="terminate" onClick={handleTerminate}>
        Terminate Account
      </button>
      </div>
    </div>
  );
}
