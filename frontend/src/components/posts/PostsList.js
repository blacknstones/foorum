import React from "react";
import PostCard from "./PostCard";

export default function PostsList({posts, onPostUpdate, onDelete}) {
    return (
        <div>
            {posts.map(post => (<PostCard key={post.id} post={post} onPostUpdate={onPostUpdate} onDelete={onDelete}/> ))}
        </div>
    );
}