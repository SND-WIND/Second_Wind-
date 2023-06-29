import React from "react";
import logoPurple from "../SVG/logo_purple.svg";
import { Link } from "@mui/material";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="newsletter">
        <form className="newsletter-form" action="">
          <h2>
            Join our newsletter to <br />
            keep up to date with us!
          </h2>
          <div className="footer-input-wrapper">
            <input
              size="40"
              className="footer-input"
              type="text"
              placeholder="Enter your email"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </form>
      </div>

      <div className="footer">
        <div className="footer-left">
          <img
            src={logoPurple}
            alt="logo"
            className="footer-logo"
            width="200px"
          />
          <p className="footer-description">
            Pick yourself up and dust yourself off you have a <br />
            Second Wind.
          </p>
        </div>
        <div className="footer-right">
          
          <div className="footer-menu">
            <h3 className="menu-title">Partners</h3>
            <Link href="https://www.aclu.org/" color="inherit">
              ACLU
            </Link>
            <Link href="https://www.vera.org/" color="inherit">
              Vera
            </Link>
            <Link href="https://eji.org/" color="inherit">
              Equal Justice Initiative
            </Link>
          </div>
          <div className="footer-menu">
            <h3 className="menu-title">Resources</h3>

            <Link href="https://saferfoundation.org/" color="inherit">
              Safer Foundation
            </Link>
            <Link href="https://www.lsc.gov/about-lsc/what-legal-aid/get-legal-help" color="inherit">
              Legal Services Corporation
            </Link>
            <Link href="https://eji.org/" color="inherit">
              Mental Health America
            </Link>
          </div>
        </div>
      </div>

      <div className="copyright">
        <h6 className="copyright-text">© 2023 Second Wind Inc.</h6>
        <div className="copyright-right">
          <h6 className="copyright-text">Terms of service</h6>
          <h6 className="copyright-text">Privacy Policy</h6>
          <h6 className="copyright-text">Cookies</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
