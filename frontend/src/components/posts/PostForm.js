import React, { useState } from 'react';

function PostForm({ onSubmit , initialTitle, initialBody}) {
    const [title, setTitle] = useState(initialTitle ? initialTitle : "");
    const [body, setBody] = useState(initialBody ? initialBody : "");

    const onCreatePost = () => {
        const postData = { title, body};
        onSubmit(postData)
            .then(() => {
                // clear the form fields after posting
                setTitle("");
                setBody("");
            });
    };

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >What's on your mind</h4>
                <div>
                    <div className="form-group">
                        <label>Title: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Give a simple and specific title for your post"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Body: </label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="......"
                            value={body}
                            onChange={e => setBody(e.target.value)} />
                    </div>



                    <div className="form-group">
                        <button
                            className="button"
                            onClick={onCreatePost}>
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostForm;