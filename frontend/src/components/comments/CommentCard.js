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
                <p className="text-justify">{body}</p>
                <p className="text-muted text-right">Comment by: {userEmail}</p>

                {currentUser.email === userEmail ?
                <button className="btn btn-secondary"
                    onClick={() => onDelete({id})}>
                    Delete
                </button>
                    : null}
            </div>
        </article>
    );

}
