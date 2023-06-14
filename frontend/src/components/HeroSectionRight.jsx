import React from "react";
import { Link } from 'react-router-dom'
// import '../styles/HeroSectionRight.css'

function HeroSectionRight () {
    return (
      <div className="hero-section-right">
        <div className="nav">
          <ul>
            <li>
              <Link to="/"></Link>Become a partner
            </li>
            <li>
              <Link to="/"></Link>Login
            </li>
          </ul>
        </div>
        <div className="slider">
          <img src="" alt="" />
        </div>
      </div>
    );
}

export default HeroSectionRight;