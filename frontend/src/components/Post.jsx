import React, { useContext, useState, useEffect, href } from "react";
import { useNavigate, Navigate, Link, useHref, } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createBookmark, deleteBookmark } from "../adapters/bookmark-adapter";
import { createLike, deleteLike, getLikes } from "../adapters/likes-adapter";
import { createComment, getAllComments } from "../adapters/comment-adapter";
import LikeIcon from "../SVG/thumb_up_line.svg";
import CommentIcon from "../SVG/comment_fill.svg";
import BookmarkIcon from "../SVG/bookmark_fill.svg";
import Comment from "./Comment";
import UpdatePostModal from "./UpdatePostModal"
import optionDots from "../SVG/option_dots_white.svg"

function Post({ post }) {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [likeId, setLikeId] = useState(post.like_id);
  const [bookmarkId, setBookmarkId] = useState(post.bookmark_id);
  const [comments, setComments] = useState([]);
  const [commentTextValue, setCommentTextValue] = useState("");
const href = useHref();
  const handleClick = (e) => {
    if (post.account_type) navigate(`/users/${post.user_id}`);
    else navigate(`/businesses/${post.business_id}`);
  };

  // useEffect(() => {
  //   setLikes();
  // }, [post]);

  const handleLike = async (e) => {
    if (likeId) {
      const data = await deleteLike({ like_id: likeId });
      console.log(data);
      setLikeId(null);
    } else {
      const data = await createLike({ post_id: post.id });
      console.log(data);
      setLikeId(data.id);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    console.log(commentTextValue);
    const [data] = await createComment({
      comment: commentTextValue,
      post_id: post.id,
    });
    console.log(data);
  };

  const handleCommentTextChange = async (e) =>
    setCommentTextValue(e.target.value);

  const openComments = async (e) => {
    const data = await getAllComments({ post_id: post.id });
    console.log(data);
    setComments(data);
  };

  const handleBookmark = async (e) => {
    if (bookmarkId) {
      const data = await deleteBookmark({ bookmark_id: bookmarkId });
      console.log(data);
      setBookmarkId(null);
    } else {
      const data = await createBookmark({ post_id: post.id });
      console.log(data);
      setBookmarkId(data.id);
    }
  };

  return (
    <div className="post-container" data-post-id={post.id}>
      <div className="post">
        <div
          className="profile-pic"
          style={{ backgroundImage: `url(${post.profile_image})` }}
        ></div>
        <div className="post-content">
          <div className="name-options">
            <h4 className="post-author" onClick={handleClick}>
              {post.username}
            </h4>
            {href == `/users/${currentUser.id}` && (
              <div>
                {/* <img src={optionDots} alt="" width="15px" height="15px"/> */}
                <UpdatePostModal />
              </div>
            )}
          </div>
          <p className="post-caption">{post.caption}</p>
          <div
            className="post-image"
            style={{ backgroundImage: `url(${post.profile_image})` }}
          ></div>
        </div>
      </div>

      <div className="post-footer">
        <div className="post-likes">
          <div onClick={handleLike} className="likes">
            <img src={LikeIcon} alt="" className="like-icon" />
            <h5>Like</h5>
            <span>{post.like_count}</span>
          </div>
        </div>

        <div className="post-comments" onClick={openComments}>
          <img src={CommentIcon} alt="" className="like-icon" />
          <h5>Comment</h5>
        </div>

        <div className="post-bookmarks" onClick={handleBookmark}>
            <img src={BookmarkIcon} alt="" className="bookmark-icon" />
            <h5>Bookmark</h5>
        </div>

        {/* {currentUser.id === post.user_id && (
          <div className="options">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )} */}
      </div>

      <h3 className="comment-title">Comments</h3>
      <form className="add-comment">
        <div className="comment-profile">
          <div
            className="comments-profile-pic"
            style={{ backgroundImage: `url(${post.profile_image})` }}
          ></div>
          <h5>{post.username}</h5>
        </div>
        <textarea
          type="text"
          placeholder="Add a comment..."
          id="add-comment-input"
          onChange={handleCommentTextChange}
        />
        <button className="comments-submit-btn" onClick={handleComment}>
          Submit
        </button>
      </form>
      <div className="all-comments">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default Post;
