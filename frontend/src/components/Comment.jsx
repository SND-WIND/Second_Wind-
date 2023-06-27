import React from 'react'

const comment = (comment) => {
  return (
    <div className="comment">
      <div className="user-profile">
        <div
          className="comments-profile-pic"
          style={{ backgroundImage: `url(${comment.profile_image})` }}
        ></div>
        <h5>{comment.username}</h5>
      </div>
    </div>
  );
}

export default comment