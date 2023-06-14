import React from "react";
import { Link } from 'react-router-dom'
// import '../styles/HeroSectionRight.css'

function HeroSectionRight () {
    return (
      <div className="hero-section-right">
        <div className="nav">
          <Link to="/sign-up">
            <button>Become a partner</button>
          </Link>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
        <div className="slider">
          <img src="" alt="" />
        </div>
      </div>
    );
}

export default HeroSectionRight;