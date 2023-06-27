import React, { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import Menu from "../components/Menu";
import PostList from "../components/PostList";
import Messages from "../components/Messages";
import "../styles/Bookmark.css"
import BookmarkList from "../components/BookmarkList";

export default function BookmarksPage() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (!currentUser) return <Navigate to="/landing" />;

  return (
    <div className="bookmark-page">
      <Menu />
      <BookmarkList />
      <Messages />
    </div>
  );
}
