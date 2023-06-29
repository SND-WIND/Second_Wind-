import { useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import PostList from "./PostList";

export default function userProfile() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  console.log(currentUser);
  return (
    <div className="user-profile-container">
      <div className="profile-cover-pic">
        <div
          className="cover-img"
          style={{ backgroundImage: `url(${currentUser.cover_image})` }}
        >
          {" "}
          <div
            className="profile-img"
            style={{ backgroundImage: `url(${currentUser.profile_image})` }}
          ></div>
        </div>
      </div>
      <div className="profile-info">
        <h4 className="profile-username">@{currentUser.username}</h4>
        <h4 className="profile-name">{currentUser.fullName}</h4>
        <div className="profile-about-me">
          <h4>About Me</h4>
          <p className="profile-bio">{currentUser.bio}</p>
        </div>
      </div>
      <PostList />
    </div>
  );
}
