import React from "react";

export default function PostDetail({ post }) {
    const {
        id,
        title,
        body,
        userEmail
    } = post;

    return (
        <article className=" card post-card">
            <div className="card-body">
                <h4>{title}</h4>
                <p>{body}</p>
                <p>Posted by: {userEmail}</p>
                <button>Comment</button>
                <button onClick={() => onDelete(post)}>Delete</button>
            </div>
        </article>
    );

}