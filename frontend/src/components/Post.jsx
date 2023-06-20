import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";

function Post({ post }) {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);

  const [likes, setLikes] = useState([]);

  const handleClick = (e) => {
    navigate(`/users/${post.user_id}`);
  };
  useEffect(() => {
    const fetchLikes = async () => {
      const res = await fetch(`/api/posts/${post.id}/likes`);
      if (res.ok) {
        const data = await res.json();
        setLikes(data);
      }
    };
    fetchLikes();
  }, [post.id]);


  const handleLike = async (e) => {
    const res = await fetch(`/api/posts/${post.id}/like`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    }
  };

  const handleComment = async (e) => { };

  const handleBookmark = async (e) => {

  };

  const handleEdit = async (e) => { };

  const handleDelete = async (e) => { };

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
          <div className="post-date">{post.created_at}</div>
        </div>
      </div>
      <div className="post-content">
        <p>{post.caption}</p>
        <img src={post.image_url} alt="" />
      </div>
      <div className="post-footer">
        <div className="post-likes">
          <button onClick={handleLike}>
            Likes {/* {likes.length} {likes.length === 1 ? "like" : "likes"} */}
          </button>

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
