import React from "react";
import PostCard from "./PostCard";

export default function PostsList({posts, onDelete}) {
    return (
        <div>
            {posts.map(post => (<PostCard key={post.id} post={post} onDelete={onDelete}/> ))}
        </div>
    );
}