import React, { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import "../styles/Post.css"

function Post({ post }) {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);

  const handleClick = (e) => {
    navigate(`/users/${post.user_id}`);
  };

  const handleLike = async (e) => {};

  const handleComment = async (e) => {};

  const handleBookmark = async (e) => {};

  const handleEdit = async (e) => {};

  const handleDelete = async (e) => {};

  return (
    <div className="post" data-post-id={post.id}>
      <div className="post-header">
        <div className="profile-pic">
          <img src={post.profile_image} alt="" />
        </div>
        <div className="post-info">
          <div className="post-author" onClick={handleClick}>
            {post.username}
          </div>
          {/* <div className="post-date">{post.created_at}</div> */}
          <p>{post.caption}</p>
        </div>
      </div>
      <div className="post-content">
        <img src={post.image_url} alt="" />
      </div>
      <div className="post-footer">
        <div className="post-likes">
          <button onClick={handleLike}>Like</button>
          <span>{post.likes}</span>
        </div>
        <div className="post-comments">
          <button onClick={() => openComments(post.id)}>Comments</button>
          <span>{/*post.comments.length*/}</span>
        </div>
        {currentUser.id === post.user_id && (
          <div className="options">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
      <div className="add-comment">
        <input type="text" placeholder="Add a comment..." />
        <button onClick={handleComment}>Submit</button>
      </div>
    </div>
  );
}

export default Post;
