import React, { useState, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { createPost } from "../adapters/post-adapter";
import img_icon from "../SVG/img_icon.svg";
import emoji from "../SVG/emoji_fill.svg";
import gif from "../SVG/GIF_White.svg";
import bold from "../SVG/bold_fill.svg";
import italic from "../SVG/italic_fill.svg";

function CreatePost() {
  const { currentUser } = useContext(CurrentUserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = {};
    for (let [name, value] of formData.entries()) {
      values[name] = value;
    }
    values.imageUrl =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8VhN_TBlqLwfgyTPtqWTDADiyOu6jiNhuJA&usqp=CAU"; // this is a placeholder
    const [data, error] = await createPost(values);
    console.log(data);
  };
console.log(currentUser)
  return (
    <form action="" className="post-form" onSubmit={handleSubmit}>
      <div className="profile-caption">
        <div
          className="profile-pic"
          style={{ backgroundImage: `url(${currentUser.profile_image})` }}
        ></div>
        <textarea
          name="caption"
          id="create-post-caption"
          placeholder="What's on your mind?"
          // value={caption}
          // onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="options">
        <div className="option-items">
          <img
            src={img_icon}
            alt=""
            className="option-item"
            width="20px"
            height="20px"
          />
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
