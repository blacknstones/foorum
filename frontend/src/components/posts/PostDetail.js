import React from "react";

export default function PostDetail({ post }) {
    const {
        id,
        title,
        body,
        userEmail
    } = post;

    return (
        <article className=" card post-card mb-3">
            <div className="card-body">
                <h4 className="mb-4">{title}</h4>
                <p>{body}</p>
                <p className="text-right text-muted">Posted by: {userEmail}</p>
        

            </div>
        </article>
    );

}