import React from 'react';


export default function CommentCard({ comment, onDelete, currentUser }) {

    const {
        id,
        body,
        userEmail
    } = comment;

    console.log(comment);

    console.log(id);

    return (
        <article className=" card comment-card">
            <div className="card-body">
                <p>{body}</p>
                <p className="text-muted">Comment by: {userEmail}</p>

                {currentUser.email === userEmail ?
                <button className="btn btn-info"
                    onClick={() => onDelete({id})}>
                    Delete
                </button>
                    : null}
            </div>
        </article>
    );

}
