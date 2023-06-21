import React from "react";
import CreatePost from "./CreatePost";
import PostList from "../components/PostList"
import feed from "../styles/Feed.css"

function Feed() {
    return (
        <div className="feed-container">
             <CreatePost />
             <PostList />
        </div>
    )
}

export default Feed;