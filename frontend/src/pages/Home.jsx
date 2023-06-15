import React from "react";
import Menu from "../components/Menu"
import Feed from "../components/Feed";
import Messages from "../components/Messages"
import '../styles/Home.css'

export default function Home() {
  return (
    <div className="home">
      <Menu />
      <Feed />
      <Messages />
    </div>
  );
};
