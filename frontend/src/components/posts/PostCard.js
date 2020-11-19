import React from "react";
import { Link } from "react-router-dom";

export default function PostCard({ post, onDelete, currentUser }) {

    const {
        id,
        title,
        body,
        userEmail
    } = post;

    return (
        <article className=" card post-card">
            <div className="card-body">
                <Link to={`/posts/${id}`}>{title}</Link>
                <p>{body}</p>
                <p>Posted by: {userEmail}</p>
                <button>Comment</button>
                <button onClick={() => onDelete(post)}>Delete</button>
            </div>
        </article>
    );
}