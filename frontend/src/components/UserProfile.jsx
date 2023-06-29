import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import PostList from "./PostList";
import { Widget } from "@uploadcare/react-widget";
import { updateUserInfo } from "../adapters/user-adapter";

export default function userProfile({ user }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [uploadedCoverImage, setUploadedCoverImage] = useState(
    currentUser.cover_image
  );
  const [uploadedProfileImage, setUploadedProfileImage] = useState(
    currentUser.profile_image
  );

  useEffect(() => {
    const handleCoverChange = async () => {
      const updatedCoverImage = await updateUserInfo({
        cover_image: uploadedCoverImage,
        id: currentUser.id,
      });
    };
    handleCoverChange();
  }, [uploadedCoverImage]);

  useEffect(() => {
    const handleProfileChange = async () => {
      const updatedProfileImage = await updateUserInfo({
        profile_image: uploadedProfileImage,
        id: currentUser.id,
      });
    };
    handleProfileChange();
  }, [uploadedProfileImage]);

  return (
    <div className="user-profile-container">
      <div className="profile-cover-pic">
        <div
          className="cover-img"
          style={{ backgroundImage: `url(${user.cover_image})` }}
        >
          <div className="upload-cover">
            <Widget
              publicKey="7363573380cc43836898"
              onChange={(file) => setUploadedCoverImage(file && file.cdnUrl)}
            />
          </div>
          <div
            className="profile-img"
            style={{ backgroundImage: `url(${user.profile_image})` }}
          ></div>
          <div className="upload-profile">
            <Widget
              publicKey="7363573380cc43836898"
              onChange={(file) => setUploadedProfileImage(file && file.cdnUrl)}
            />
          </div>
        </div>
      </div>
      <div className="profile-info">
        <h4 className="profile-username">@{user.username}</h4>
        <h4 className="profile-name">{user.fullName}</h4>
        <div className="profile-about-me">
          <h4>About Me</h4>
          <p className="profile-bio">{user.bio}</p>
        </div>
      </div>
      <PostList />
    </div>
  );
}
