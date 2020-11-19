import React from "react";
import PostCard from "./PostCard";

export default function PostsList({ posts, onDelete, currentUser}) {
    
    return (
        <div>
            {
                posts.length === 0 ?
                    <p>This is no post yet. Create a new post now!</p> :
                    <div>
                        {posts.map(post => (<PostCard key={post.id} post={post} onDelete={onDelete} currentUser={currentUser}/>))}
                    </div>
            }
        </div>

    );
}