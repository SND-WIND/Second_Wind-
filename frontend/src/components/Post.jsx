import { useNavigate, Navigate, Link } from "react-router-dom";

function Post({ post, currentUser }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`/users/${post.user_id}`);
  };

  const handleLike = async (e) => {
    
  }

  const handleComment = async (e) => {
    
  }

  const handleBookmark = async (e) => {
    
  }

  const handleEdit = async (e) => {
    
  }

  const handleDelete = async (e) => {
    
  }

  // return (
  //   <div className="post" data-post-id={post.id}>
  //     <div className="post-header">
  //       <div className="profile-pic"><img src={post.profile_image} alt="" /></div>
  //       <div className="post-info">
  //         <div className="post-author" onClick={handleClick}>{post.username}</div>
  //         <div className="post-date">{post.created_at}</div>
  //       </div>
  //     </div>
  //     <div className="post-content">
  //       <p>{post.caption}</p>
  //       <img src={post.image_url} alt="" />
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
    </div>
  );
}

export default Post;
