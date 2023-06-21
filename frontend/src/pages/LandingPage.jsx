import React, { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CurrentUserContext from "../contexts/current-user-context";
import LandingPage2 from "../components/LandingPage2";
import LandingPage3 from "../components/LandingPage3";
import LandingPage4 from "../components/LandingPage4";
import Horizantal   from "../components/Horizantal"
import LandingFooter from "../components/LandingFooter";
import "../styles/LandingPage.css";

function LandingPage() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser) return <Navigate to="/" />;
  return (
    <div className="original-landing-page-container">
      <HeroSection />
       <LandingPage2 />
      <LandingPage3 />
      <LandingPage4 />
      <Horizantal color="#A674AE" />
      <LandingFooter />
      {/* <Horizantal color="#A674AE" /> */}
    </div>
  );
}

export default LandingPage;
