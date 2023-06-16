import React, { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import Menu from "../components/Menu";
import Feed from "../components/Feed";
import Messages from "../components/Messages";
import "../styles/Home.css";

export default function Home() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (!currentUser) return <Navigate to="/landing" />;

  return (
    <div className="home">
      <Menu />
      <Feed />
      <Messages />
    </div>
  );
}
