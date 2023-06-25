import { useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import PostList from "./PostList";
import "../styles/Jobs.css";

export default function userProfile() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return (
    <div className="user-profile-container">
      <div className="cover-img">
        <img
          src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </div>
      <div className="profile-picture">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
          alt=""
        />
      </div>
      <div className="profile-info">
        <h4 className="profile-username">@{currentUser.username}</h4>
      </div>
      <PostList />
    </div>
  );
}
