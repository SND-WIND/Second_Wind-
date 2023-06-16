import React from "react";
import '../styles/Post.css'

function Post({ post, currentUser }) {
  if (!post) {
    post = {
      id: "1",
      author: "John Doe",
      date: "2023-06-15",
      likes: 100,
      comments: [],
      content:
        "This is a static post. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    };
  }

  return (
    <div className="post">
      <div className="post-content">
        <div className="profile-pic"></div>
        <div className="post-info">
          <div className="post-author">{post.author}</div>
          <div className="post-date">{post.date}</div>
          <div className="post-description">
            <p>{post.content}</p>
          </div>
        </div>
      </div>

      <div className="post-footer">
        <div className="post-likes">
          <button onClick={() => likePost(post.id)}>Like</button>
          <span>{post.likes}</span>
        </div>

        <div className="post-comments">
          <button onClick={() => openComments(post.id)}>Comments</button>
          <span>{post.comments.length}</span>
        </div>

        {currentUser === post.author && (
          <div className="options">
            <button onClick={() => editPost(post.id)}>Edit</button>
            <button onClick={() => deletePost(post.id)}>Delete</button>
          </div>
        )}
      </div>

      <div className="add-comment">
        <input type="text" placeholder="Add a comment..." />
        <button onClick={() => addComment(post.id)}>Submit</button>
      </div>
    </div>
  );
}

export default Post;
