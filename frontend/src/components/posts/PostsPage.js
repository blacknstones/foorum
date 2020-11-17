import React from "react";
import PostForm from "./PostForm";
import PostCard from "./PostCard";
import Api from "../../api/Api";
import PostsApi from "../../api/PostsApi";

function PostsPage() {
    const createPost = (postData) => {
        Api.post("/posts", postData)
            .then(r => console.log(r));
    }

    return (
        <div>
            <PostForm onSubmit = {createPost} />
            <PostCard />
        </div>
  
    );
}

export default PostsPage;