import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createBookmark, deleteBookmark } from "../adapters/bookmark-adapter";
import LikeIcon from "../SVG/thumb_up_line.svg";
import CommentIcon from "../SVG/comment_fill.svg";
import BookmarkIcon from "../SVG/bookmark_fill.svg";
import { createLike, deleteLike, getLikes } from "../adapters/likes-adapter";

function Post({ post }) {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);

  const [likeId, setLikeId] = useState(post.like_id);
  const [comments, setComments] = useState([]);
  const [bookmarkId, setBookmarkId] = useState(post.bookmark_id);

  const handleClick = (e) => {
    console.log(post);
    if (post.account_type) {
      // navigate(`/users/${post.user_id}`);
    } else {
      // navigate(`/businesses/${post.business_id}`);
    }
    navigate(`/users/${post.user_id}`);
  };

  // useEffect(() => {
  //   setLikes();
  // }, [post]);

  const handleLike = async (e) => {
    // console.log("post", post, id);
    // await createLike(post, id);

    // let res = await getLikes(post);
    // console.log(res);
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
    console.log(e);
  };

  const openComments = async (e) => {
    console.log(e);
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

  const handleEdit = async (e) => {
    console.log(e);
  };

  const handleDelete = async (e) => {
    console.log(e);
  };

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
            <h5>Like</h5>
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
            <h5>Bookmark</h5>
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
