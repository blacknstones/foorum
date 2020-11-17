import React, {useState} from 'react';

function PostForm({onSubmit}) {
    const [post, setPost] = useState("");

    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title" >What's on your mind</h4>
                <div>
                    <div className="form-group">
                        <label></label>
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="..."
                            value={post}
                            onChange={e => setPost(e.target.value)} />
                    </div>

                    

                    <div className="form-group">
                        <button 
                            className="btn btn-info" 
                            onClick={() => onSubmit({post})}>
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostForm;