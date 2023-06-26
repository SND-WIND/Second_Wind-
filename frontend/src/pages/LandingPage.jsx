import React, { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CurrentUserContext from "../contexts/current-user-context";
import Section1 from "../components/Section1"
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Footer from "../components/Footer";
import "../styles/LandingPage.css";

function LandingPage() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser) return <Navigate to="/" />;
  return (
    <div className="landing-page">
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
}

export default LandingPage;
