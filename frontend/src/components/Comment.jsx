import React from "react";

const comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-profile">
        <div
          className="comments-profile-pic"
          style={{ backgroundImage: `url(${comment.profile_image})` }}
        ></div>
        <h5>{comment.username}</h5>
      </div>
      <p className="user-comment">{comment.comment}</p>
    </div>
  );
};

export default comment;
