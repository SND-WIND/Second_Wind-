import React, { useState, useEffect } from "react";
import Post from "./Post";
import { getAllPosts } from "../adapters/post-adapter";
import { getUserPosts } from "../adapters/user-adapter";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchPosts() {
      const data = await getAllPosts();
      console.log(data);
      setPosts(data);
    }
    fetchPosts();
  }, [page]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
