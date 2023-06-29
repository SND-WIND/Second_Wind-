import React, { useState } from "react";
import { useParams } from "react-router-dom";
import optionDots from "../SVG/option_dots_white.svg";
import { updatePost } from "../adapters/post-adapter";

const UpdatePostModal = () => {
  const [caption, setCaption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();

  const handleTextChange = (event) => {
    setCaption(event.target.value);
  };

  // const handlefetch = async (url, options) => {
  //   try {
  //     const r = await fetch(url, options);
  //     const data = await r.json();
  //     // return data;
  //   } catch (err) {
  //     console.log(err);
  //     return null;
  //   }
  // };

  // const handleSubmit = async (e) => {};

  const handleDeletePost = () => {
    // if (window.confirm("Are you sure you want to delete post?")) {
    //   try {
    //     deleteAccount();
    //     setCurrentUser(null);
    //     navigate(`/user/${id}`);
    //   } catch (error) {
    //     console.error("Failed to delete post:", error);
    //   }
    // }
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    //const [caption, id] = await updatePost(caption);
    const updatedCaption = await updatePost(caption);
    return updatedCaption;
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
      <img src={optionDots} onClick={handleOpenModal} alt="" width="5px" />
      {isOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="post-modal-content" onClick={handleModalClick}>
            <h2>Update Post</h2>
            <form className="post-modal-form" onSubmit={handleUpdatePost}>
              <label htmlFor="" onChange={handleTextChange}>
                Caption{" "}
                <textarea
                  name="description"
                  // value={postText}
                  className="post-caption-input"
                  placeholder="Enter your job description here..."
                ></textarea>
              </label>
              <button id="update-post-btn" type="submit">
                Update Post
              </button>
            </form>
            <button
              id="delete-post-btn"
              type="submit"
              onSubmit={handleDeletePost}
            >
              Delete Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePostModal;
