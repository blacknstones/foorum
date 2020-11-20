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
        <article className=" card post-card mb-3">
            <div className="card-body">
                <Link to={`/posts/${id}`}><h4>{title}</h4></Link>
    
                <p className="text-muted">Posted by: {userEmail}</p>
                
                {currentUser.email === userEmail ?
                <button className="btn btn-secondary "
                    onClick={() => onDelete({id})}>
                    Delete
                </button >
                    : null}
                
            </div>
        </article>
    );
}