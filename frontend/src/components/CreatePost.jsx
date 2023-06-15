import React, { useState } from "react";
import img_icon from "../SVG/img_icon.svg";
import emoji from "../SVG/emoji_fill.svg"
import gif from "../SVG/GIF_White.svg"
import bold from "../SVG/bold_fill.svg";
import italic from "../SVG/italic_fill.svg";

function CreatePost () {
        
    const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const values = {};
      for (let [name, value] of formData.entries()) {
        values[name] = value;
      }
      console.log("submission", values);
      handlefetch("http://localhost:4000/post", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      });
    };

    return (
      <div className="create-post">
        <form action="" className="post-form">
          <div className="profile-caption">
            <div className="profile-pic"></div>
            <textarea placeholder="What's on your mind?"></textarea>
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
            <button type="submit" className="post-btn" onSubmit={handleSubmit}>Post</button>
          </div>
        </form>
      </div>
    );
}

export default CreatePost;