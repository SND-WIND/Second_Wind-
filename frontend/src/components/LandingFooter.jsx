import React from 'react'
import logo from "../SVG/logo_purple.svg";

const LandingFooter = () => {
  return (
    <div className= "landing-footer-container">
    <div className="landing-footer-left">
    <img
    src={logo}
    alt=""
    id="logo-purple"
  />
    </div>
    <div className="landing-footer-right">
        <div className = "footer-header">Platform</div>
        <div className = "footer-header">Platform</div>
        <div className = "footer-header">Platform</div>
    </div>
</div>
  )
}

export default LandingFooter