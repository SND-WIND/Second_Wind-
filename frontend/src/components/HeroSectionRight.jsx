import React from "react";
import { Link } from 'react-router-dom'
import rightArrow from "../SVG/right_arrow_white.svg";
import leftArrow from "../SVG/left_arrow_white.svg"
import { Button } from "@mui/material";
function HeroSectionRight () {
    return (
      <div className="hero-section-right">
        <div className="nav">
          <Link to="/sign-up">
            <Button autoCapitalize="none" variant="contained" color="black" className="nav-items btn">Join Now!</Button>
          </Link>
          <Link to="/login">
            <Button  autoCapitalize="none" variant="contained" color="black" className="nav-items btn">Log In</Button>
          </Link>
        </div>
        <div className="carousel-wrapper">
          <div className="arrows">
            <img src={leftArrow} className="arrow-icon" alt="" />
          </div>
          <div className="display-card">
            <div className="display-card-img"></div>
            <div className="display-card-description">
              <h5>Gregory M.</h5>
              <h6>Found my passion in digital art</h6>
            </div>
          </div>
          <div className="arrows">
            <img src={rightArrow} className="arrow-icon" alt="" />
          </div>
        </div>
      </div>
    );
}

export default HeroSectionRight;