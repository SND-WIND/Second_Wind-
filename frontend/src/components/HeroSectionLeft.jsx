import React from "react";
import { Link } from "react-router-dom";
import logo from "../SVG/logo_purple.svg";
import { Button } from "@mui/material";
function HeroSectionLeft() {
  return (
    <div className="hero-section-left">
      
      <img
        src={logo}
        alt=""
        id="logo-purple"
      />
      <div className="hero-description">
        <h1>Connecting returning citizens back to their society</h1>
        <p classname="hero-section-details">
          Helping ex-convicts reintegrate into society involves providing them
          with essential resources like jobs, housing healthcare and many more
          to rebuild their lives.
        </p>
        <Link to="/sign-up">
          <Button autoCapitalize="none" variant="contained" color="secondary" className="nav-items btn btn-text-black" id="sign-up-btn">Sign Up</Button>
        </Link>
        <Link to="/login">
          <Button autoCapitalize="none" variant="contained" color="secondary" className="nav-items btn btn-text-black" id="login-btn">Login</Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSectionLeft;
