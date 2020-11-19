// React core
import React from 'react';

export default function PostCard({ post, onDelete }) {

    return (
        <article className=" card post-card">
            <div className="card-body">
                <h5>{post.title}</h5>
                <p>{post.body}</p>
                <p>Posted by: (connect user email here)</p>
                <button></button>
                <button onClick={() => onDelete(post)}>Delete</button>
            </div>
        </article>
    );
}