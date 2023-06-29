import React, { useState, useEffect } from "react";
import { useParams, useHref } from "react-router-dom";
import Post from "./Post";
import { getAllPosts } from "../adapters/post-adapter";
import { getUserPosts } from "../adapters/user-adapter";
import { getAllBookmarks } from "../adapters/bookmark-adapter";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const href = useHref();

  useEffect(() => {
    async function fetchPosts() {
      if (href === "/") {
        const data = await getAllPosts();
        console.log("all", data);
        setPosts(data);
      } else if (href === `/users/${id}`) {
        const data = await getUserPosts(id);
        console.log("users", data);
        setPosts(data);
      } else if (href === `/businesses/${id}`) {
        const data = await getUserPosts(id);
        console.log("businesses", data);
        setPosts(data);
      } else if (href === `/bookmarks`) {
        const data = await getAllBookmarks();
        console.log("bookmarks", data);
        setPosts(data);
      }
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
    <div className="post-list">
      {posts.map((post) => (
        
      <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
