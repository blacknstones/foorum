import React, { useState } from "react";

export default function CommentForm({ onSubmit, post, currentUser }) {
    const [body, setBody] = useState("");

    const onCreateComment = () => {
        const userEmail = currentUser.email;
        
        const commentData = { body, userEmail, post };
        onSubmit(commentData);
       
    };


    console.log("current user: " + currentUser);
    

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
                            className="btn btn-info"
                            onClick={onCreateComment} >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}