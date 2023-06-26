import React, { useContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import {deleteAccount } from "../adapters/auth-adapter";
import CurrentUserContext from "../contexts/current-user-context";

function SettingsTerminate() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
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
    <div className="terminate-wrapper">
      <h2>Terminate Account</h2>
      <div className="terminate-warning">
        <h3>What happens when you deactivate your <br/>account?</h3>
        <ul className="terminate-info">
          <li>Your profile and Posts won't be shown on <br/>SecondWind anymore.</li>
          <li>All your data will be removed from our <br/>database.</li>
          <li>You won't be able to re-activate your <br/>account.</li>
        </ul>
      </div>
      <button name="terminate" id="terminate-btn" onClick={handleTerminate}>
        Terminate Account
      </button>
    </div>
  );
};

export default SettingsTerminate;
