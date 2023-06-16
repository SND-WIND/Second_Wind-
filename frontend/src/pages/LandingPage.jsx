import React, { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import CurrentUserContext from "../contexts/current-user-context";
import "../styles/LandingPage.css";

function LandingPage() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser) return <Navigate to="/" />;

  return (
    <>
      <HeroSection />
    </>
  );
}

export default LandingPage;
