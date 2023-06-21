import React, { useContext } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import LikeIcon from "../SVG/thumb_up_line.svg"
import CommentIcon from "../SVG/comment_fill.svg"
import BookmarkIcon from "../SVG/bookmark_fill.svg"

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
    <div className="post-container" data-post-id={post.id}>
      <div className="post">
        <div className="profile-pic">
          <img src={post.profile_image} alt="" />
        </div>
        <div className="post-content">
          <h4 className="post-author" onClick={handleClick}>
            {post.username}
          </h4>
          {/* <div className="post-date">{post.created_at}</div> */}
          <p className="post-caption">{post.caption}</p>
          <div className="post-image">
            <img src={post.image_url} alt="" />
          </div>
        </div>
      </div>

      <div className="post-footer">
        <div className="post-likes lcb">
          <div onClick={handleLike} className="lcb">
            <img src={LikeIcon} alt="" className="like-icon" />
            <h5>Likes</h5>
          </div>
          <span>{post.likes}</span>
        </div>

        <div className="post-comments">
          <div className="lcb" onClick={() => openComments(post.id)}>
            <img src={CommentIcon} alt="" className="like-icon" />
            <h5>Comment</h5>
          </div>
          <span>{/*post.comments.length*/}</span>
        </div>

        <div className="post-bookmarks">
          <div onClick={handleBookmark} className="lcb">
            <img src={BookmarkIcon} alt="" className="bookmark-icon" />
            <h5>Bookmarks</h5>
          </div>
          <span>{post.likes}</span>
        </div>

        {currentUser.id === post.user_id && (
          <div className="options">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>

      <form className="add-comment">
        <div className="user-profile">
          <div className="profile-pic">
            <img src="" alt="" />
          </div>
          <h5>{post.username}</h5>
        </div>
        <textarea type="text" placeholder="Add a comment..." />
        <button onClick={handleComment}>Submit</button>
      </form>
    </div>
  );
}

export default Post;
