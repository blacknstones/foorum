import React from "react";
import PostForm from "./PostForm";
import PostCard from "./PostCard";
import PostsApi from "../../api/PostsApi";

function PostsPage() {
    const createPost = (postData) => {

        PostsApi.createPost(postData)
            .then(response => console.log(response));
    }

    return (
        <div>
            <PostForm onSubmit = {createPost} />
            <PostCard />
        </div>
  
    );
}

export default PostsPage;