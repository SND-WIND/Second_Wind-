import React from "react";
import { Link } from "react-router-dom";
import logo from "../SVG/logo_purple.svg";

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
        <p>
          Helping ex-convicts reintegrate into society involves providing them
          with essential resources like jobs, housing healthcare and many more
          to rebuild their lives.
        </p>
        <Link to="/sign-up">
          <button id="sign-up-btn">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSectionLeft;
