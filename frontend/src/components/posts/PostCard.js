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
    
                <p>Posted by: {userEmail}</p>
                
                {currentUser.email === userEmail ?
                <button
                    onClick={() => onDelete({id})}>
                    Delete
                </button>
                    : null}
                
            </div>
        </article>
    );
}