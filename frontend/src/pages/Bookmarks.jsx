import React, { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import Menu from "../components/Menu";
import PostList from "../components/PostList";
import Messages from "../components/Messages";

export default function BookmarksPage() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (!currentUser) return <Navigate to="/landing" />;

  return (
    <>
      <Menu />
      <PostList />
      <Messages />
    </>
  );
}
