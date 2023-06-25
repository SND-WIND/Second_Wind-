import React, { useState, useEffect } from "react";
import SettingsUserForm from "./SettingsUserFrom";
import SettingsSecurityForm from "../components/SettingsSecurityForm";
import SettingsTerminate from "./SettingsTerminate";

const SettingsToggle = () => {
  const [activeForm, setActiveForm] = useState("user");

  const toggleForm = (formName) => {
    // setActiveForm(activeForm === "form1" ? "form2" : "form1");
    setActiveForm(formName)
    console.log(formName)
  };
  

  return (
    <div className="settings-toggle-form">
      <div className="settings-menu">
        <h3 className="settings-menu-item" onClick={() => toggleForm("user")}>
          User
        </h3>
        <h3
          className="settings-menu-item"
          onClick={() => toggleForm("security")}
        >
          Security
        </h3>
        <h3
          className="settings-menu-item"
          onClick={() => toggleForm("terminate")}
        >
          Terminate
        </h3>
      </div>

      {activeForm === "user" && <SettingsUserForm />}
      {activeForm === "security" && <SettingsSecurityForm />}
      {activeForm === "terminate" && <SettingsTerminate />}
    </div>
  );
};

export default SettingsToggle;
