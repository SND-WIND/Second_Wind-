import React, { useContext, useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { createBookmark, deleteBookmark } from "../adapters/bookmark-adapter";
import LikeIcon from "../SVG/thumb_up_line.svg";
import CommentIcon from "../SVG/comment_fill.svg";
import BookmarkIcon from "../SVG/bookmark_fill.svg";

function Post({ post }) {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);

  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [bookmarkId, setBookmarkId] = useState(null);

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
  //   const fetchLikes = async () => {
  //     const res = await fetch(`/api/posts/${post.id}/likes`);
  //     if (res.ok) {
  //       const data = await res.json();
  //       setLikes(data);
  //     }
  //   };
  //   fetchLikes();
  // }, [post.id]);

  const handleLike = async (e) => {
    // const res = await fetch(`/api/posts/${post.id}/like`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // if (res.ok) {
    //   const data = await res.json();
    //   console.log(data);
    // }
    console.log(e);
  };

  const handleComment = async (e) => {
    console.log(e);
  };

  const openComments = async (e) => {
    console.log(e);
  };

  const handleBookmark = async (e) => {
    const data = post.bookmarked
      ? await deleteBookmark({ post_id: post.id })
      : await createBookmark({ post_id: post.id });
    // const data = await createBookmark({ post_id: post.id });
    // setBookmarkId(data.id);
    console.log(data);
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
