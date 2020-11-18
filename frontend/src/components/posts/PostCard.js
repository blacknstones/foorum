// React core
import React from 'react';

export default function PostCard({ post, onDelete }) {

    return (
        <article className=" card post-card">
            <div className="card-body">
                <h5>{post.title}</h5>
                <p>{post.body}</p>
                <p>Posted by: (user emmail)</p>
                <button>comment</button>
                <button onClick={() => onDelete(post)}>Delete</button>
            </div>
        </article>
    );
}