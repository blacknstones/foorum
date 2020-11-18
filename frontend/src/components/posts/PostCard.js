// React core
import React, { useState } from 'react';
import PostForm from "./PostForm";
import PostsApi from '../../api/PostsApi';

export default function PostCard({ post, onPostUpdate, onDelete }) {
    const [isUpdating, setIsUpdating] = useState(false);
    const onUpdateClick = () => {
        setIsUpdating(true);
    };

    const onPostFormSubmit = (postData) => {
        const updatedPost = {...post, ...postData};
        return onPostUpdate(updatedPost)
        .then(setIsUpdating(false));
    };
  

    return (
        <div>
            {isUpdating ? 
            <PostForm 
                initialTitle = {post.title} 
                initialBody={post.body}
                onSubmit={onPostFormSubmit}
                /> 
                :
                <article className=" card post-card">

                    <div className="card-body">

                        <h5>{post.title}</h5>
                        <p>{post.body}</p>
                        <p>Posted by: (user emmail)</p>
                        <button>comment</button>
                        <button onClick={onUpdateClick}>Update</button>
                        <button onClick={()=> onDelete(post)}>Delete</button>
                    </div>

                </article>
            }
        </div>

    );
}