import React from "react";
import HeroSectionLeft from "./HeroSectionLeft";
import HeroSectionRight from "./HeroSectionRight";
// import '../styles/HeroSection.css'

function HeroSection () {
    return (
      <div className="hero-section">
        <HeroSectionLeft />
        <HeroSectionRight />
      </div>
    );
}

export default HeroSection;