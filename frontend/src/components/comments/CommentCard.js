import React from 'react';


export default function CommentCard({ comment, onDelete, currentUser }) {

    const {
        body,
        userEmail
    } = comment;

    console.log(comment);


    return (
        <article className=" card comment-card">
            <div className="card-body">
                <p>{body}</p>
                <p>Comment by: {userEmail}</p>

                {currentUser.email === userEmail ?
                <button
                    onClick={() => onDelete({comment})}>
                    Delete
                </button>
                    : null}
            </div>
        </article>
    );
}
