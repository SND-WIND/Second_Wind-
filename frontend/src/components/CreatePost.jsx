import React, { useState, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { createPost } from "../adapters/post-adapter";
import img_icon from "../SVG/img_icon.svg";
import emoji from "../SVG/emoji_fill.svg";
import gif from "../SVG/GIF_White.svg";
import bold from "../SVG/bold_fill.svg";
import italic from "../SVG/italic_fill.svg";

//Upload Care Blocks import
import { Widget } from "@uploadcare/react-widget";

function CreatePost() {
  const { currentUser } = useContext(CurrentUserContext);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageRemove = () => {
    setUploadedImage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = { imageUrl: uploadedImage };
    for (let [name, value] of formData.entries()) {
      values[name] = value;
    }
    const [data, error] = await createPost(values);
  };

  return (
    <form action="" className="post-form" onSubmit={handleSubmit}>
      <div className="profile-caption">
        <div>
          <div
            className="profile-pic"
            style={{ backgroundImage: `url(${currentUser.profile_image})` }}
          ></div>
          <textarea
            name="caption"
            id="create-post-caption"
            placeholder="What's on your mind?"
            required
          ></textarea>
        </div>
        {uploadedImage && (
          <img
            className="create-post-upload"
            src={uploadedImage}
            alt="Uploaded"
            width="100%"
          />
        )}
      </div>
      <div className="options">
        <div className="option-items">
          <div className="create-post-img-icon">
              <Widget
                publicKey="7363573380cc43836898"
                onChange={(file) => setUploadedImage(file && file.cdnUrl)}
              />
          </div>
          <img
            src={emoji}
            alt=""
            className="option-item"
            width="20px"
            height="20px"
          />
          <img
            src={gif}
            alt=""
            className="option-item"
            width="20px"
            height="20px"
          />
          <img
            src={bold}
            alt=""
            className="option-item"
            width="20px"
            height="20px"
          />
          <img
            src={italic}
            alt=""
            className="option-item"
            width="20px"
            height="20px"
          />
        </div>
        <button type="submit" className="post-btn">
          Post
        </button>
      </div>
    </form>
  );
}

export default CreatePost;
