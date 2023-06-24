import React, { useState } from "react";
import { useParams } from "react-router-dom";
import optionsIcon from "../SVG/options_icon.svg";

const Modal = () => {
  const [postText, setPostText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  const handleTextChange = (event) => {
    setPostText(event.target.value);
  };

  const handlefetch = async (url, options) => {
    try {
      const r = await fetch(url, options);
      const data = await r.json();
      // return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const handleSubmit = () => {
    e.preventDefault();
    console.log(`Updating post: ${postText}`);
    const formData = new FormData(e.target);
    const values = {};
    for (let [name, value] of formData.entries()) {
      values[name] = value;
    }
    console.log("submission", values);
    handlefetch(`http://127.0.0.1:3000/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  const handleDeletePost = () => {
    // Logic for deleting the post
    console.log("Deleting post");
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <button onClick={handleOpenModal}>
        <img src={optionsIcon} alt="" width="15px" />
      </button>
      {isOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={handleModalClick}>
            <h2>Update Post</h2>
            <form>
              <textarea
                value={postText}
                onChange={handleTextChange}
                placeholder="Enter your post caption here..."
              ></textarea>
              <button type="submit" onClick={handleSubmit}>
                Update Post
              </button>
            </form>
            <button type="button" onClick={handleDeletePost}>
              Delete Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
