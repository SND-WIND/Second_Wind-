import React, { useState, useEffect } from 'react';
import Post from './Post';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // fetch posts from database
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
      .then(response => response.json())
      .then(data => setPosts(prevPosts => [...prevPosts, ...data]));
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {posts.map(post => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default PostList;
