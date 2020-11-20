import React, { useState } from "react";

export default function CommentForm({ onSubmit, postId, currentUser }) {
    const [body, setBody] = useState("");

    const onCreateComment = () => {
        const userEmail = currentUser.email;
        const commentData = { body, userEmail, postId };
        onSubmit(commentData);
    };


    console.log(currentUser);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title" >Your comment</h5>
                <div>

                    <div className="form-group">

                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="Write your comment here..."
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <button
                            className="button"
                            onClick={onCreateComment} >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}