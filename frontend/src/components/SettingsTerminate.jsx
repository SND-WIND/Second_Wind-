import React from "react";

const SettingsTerminate = () => {
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

  return (
    <div className="terminate-wrapper">
      <h2>Terminate Account</h2>
      <div className="terminate-warning">
        <h3>What happens when you deactivate your account?</h3>
        <ul className="terminate-info">
          <li>Your profile and Posts won't be shown on SecondWind anymore.</li>
          <li>All your data will be removed from our database.</li>
          <li>You won't be able to re-activate your account.</li>
        </ul>
      </div>
      <button name="terminate" id="terminate-btn" onClick={handleTerminate}>
        Terminate Account
      </button>
    </div>
  );
};

export default SettingsTerminate;
