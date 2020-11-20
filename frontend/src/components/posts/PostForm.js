import React, { useState } from 'react';


export default function PostForm({ onSubmit, currentUser}) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onCreatePost = () => {
        const userEmail = currentUser.email;
        const postData = {title, body, userEmail};
        onSubmit(postData);
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h4 className="card-title" >Create your post</h4>
                <div>
                    <div className="form-group">
                        <h6 className="font-weight-bold text-left">Title: </h6>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Give a simple and specific title for your post"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <h6 className="font-weight-bold text-left">Body: </h6>
                        <textarea
                            type="text"
                            className="form-control"
                            placeholder="......"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <button
                            className="btn btn-info"
                            onClick={onCreatePost} >
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}