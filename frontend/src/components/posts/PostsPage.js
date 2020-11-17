import React from "react";
import PostForm from "./PostForm";
import PostCard from "./PostCard";
import PostsApi from "../../api/PostsApi";
import AllPosts from "./AllPosts";

function PostsPage() {
    const createPost = (postData) => {

        PostsApi.createPost(postData)
            .then(response => console.log(response));
    };

    const allPosts = () => {
        PostsApi.getAllPosts() 
    };


    return (
        <div>
            <PostForm onSubmit = {createPost} />
            <AllPosts data={allPosts}/>
        </div>
  
    );
}
export default PostsPage;