import React, { useState, useEffect } from "react";
import { createPost } from "../adapters/post-adapter";
import img_icon from "../SVG/img_icon.svg";
import emoji from "../SVG/emoji_fill.svg";
import gif from "../SVG/GIF_White.svg";
import bold from "../SVG/bold_fill.svg";
import italic from "../SVG/italic_fill.svg";

function CreatePost() {
  const [caption, setCaption] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  const handleChange = (e) => {
    setCaption(e.target.value);
  };

  // useEffect(() => {
  //   const handleKeyPress = (e) => {
  //     setCaption(e.target.value);
  //   };
  //   document.addEventListener("keydown", handleKeyPress);
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyPress);
  //   };
  // }, [caption]);

  const handlefetch = async (url, options) => {
    try {
      const r = await fetch(url, options);
      const data = await r.json();
      console.log(data);
    } catch (err) {
      console.log(err);
      return null;
    }
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await handlefetch("/posts", {
        caption,
        imageUrl,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-post">
      <form action="" className="post-form" onSubmit={handleSubmit}>
        <div className="profile-caption">
          <div className="profile-pic"></div>
          <textarea
            name="caption"
            id="caption"
            placeholder="What's on your mind?"
            value={caption}
            onChange={handleChange}
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
    </div>
  );
}

export default CreatePost;
