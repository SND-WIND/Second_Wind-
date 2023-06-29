import { useState, useEffect, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import PostList from "./PostList";
import { Widget } from "@uploadcare/react-widget";
import { updateUserInfo } from "../adapters/user-adapter";
import imgIcon from "../SVG/img_icon.svg";

export default function userProfile() {
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
          style={{ backgroundImage: `url(${currentUser.cover_image})` }}
        >
          <div className="upload-cover">
            <Widget
              publicKey="7363573380cc43836898"
              onChange={(file) => setUploadedCoverImage(file && file.cdnUrl)}
            />
          </div>
          <div
            className="profile-img"
            style={{ backgroundImage: `url(${currentUser.profile_image})` }}
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
        <div>
          <h4 className="profile-username">@{currentUser.username}</h4>
          <h4 className="profile-name">{currentUser.fullName}</h4>
          <div className="profile-about-me">
            <h4>About Me</h4>
            <p className="profile-bio">{currentUser.bio}</p>
          </div>
        </div>
      </div>
      <PostList />
    </div>
  );
}
