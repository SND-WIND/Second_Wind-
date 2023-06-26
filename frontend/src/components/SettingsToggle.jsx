import React, { useState, useEffect } from "react";
import SettingsUserForm from "./SettingsUserFrom";
import SettingsSecurityForm from "../components/SettingsSecurityForm";
import SettingsTerminate from "./SettingsTerminate";
import { Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShieldIcon from '@mui/icons-material/Shield';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';

const SettingsToggle = () => {
  const [activeForm, setActiveForm] = useState("user");

  const toggleForm = (formName) => {
    setActiveForm(formName)
  };
  

  return (
    <div className="settings-toggle-form">
      <div className="settings-menu">
        <Button variant="contained" endIcon={<ContactEmergencyIcon/>}color="primary" onClick={() => toggleForm("user")}>
        <h3 className="settings-menu-item" onClick={() => toggleForm("user")}>
          User
        </h3>
        </Button>
        <Button variant="contained" endIcon={<ShieldIcon/>}color="primary" onClick={() => toggleForm("security")}>
        <h3
          className="settings-menu-item"
  
        >
          Security
        </h3>
        </Button>
        <Button variant="contained"  endIcon={<DeleteForeverIcon size="large"/>}color="primary" onClick={() => toggleForm("terminate")}>
        <h3
          className="settings-menu-item"
          
        >
          Terminate
        </h3>
        </Button>
      </div>

      {activeForm === "user" && <SettingsUserForm />}
      {activeForm === "security" && <SettingsSecurityForm />}
      {activeForm === "terminate" && <SettingsTerminate />}
    </div>
  );
};

export default SettingsToggle;
