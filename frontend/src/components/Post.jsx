import { useNavigate, Navigate, Link } from "react-router-dom";

function Post({ post, currentUser }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/users/${post.user_id}`);
  };
  // return (
  //   <div className="post">
  //     <div className="post-header">
  //       <div className="profile-pic"></div>
  //       <div className="post-info">
  //         <div className="post-author">{post.author}</div>
  //         <div className="post-date">{post.date}</div>
  //       </div>
  //     </div>
  //     <div className="post-content">
  //       <p>{post.content}</p>
  //     </div>
  //     <div className="post-footer">
  //       <div className="post-likes">
  //         <button onClick={() => likePost(post.id)}>Like</button>
  //         <span>{post.likes}</span>
  //       </div>
  //       <div className="post-comments">
  //         <button onClick={() => openComments(post.id)}>Comments</button>
  //         <span>{post.comments.length}</span>
  //       </div>
  //       {currentUser === post.author && (
  //         <div className="options">
  //           <button onClick={() => editPost(post.id)}>Edit</button>
  //           <button onClick={() => deletePost(post.id)}>Delete</button>
  //         </div>
  //       )}
  //     </div>
  //     <div className="add-comment">
  //       <input type="text" placeholder="Add a comment..." />
  //       <button onClick={() => addComment(post.id)}>Submit</button>
  //     </div>
  //   </div>
  // );

  return (
    <div className="post">
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
    </div>
  );
}

export default Post;
