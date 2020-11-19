import React from 'react';

export default function CommentCard({ comment, onDelete }) {
    console.log(comment);

    return (
        <article className=" card comment-card">
            <div className="card-body">
                <p>{comment.body}</p>
    <p>Posted by: {comment.userEmail}</p>
                <button onClick={() => onDelete(comment)}>Delete</button>
            </div>
        </article>
    );
}