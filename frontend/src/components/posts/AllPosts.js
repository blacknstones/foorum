// React core
import React from "react";
import PostsApi from "../../api/PostsApi";

export default function AllPosts() {

    const allPosts = () => {
        PostsApi.getAllPosts()
    };
    

    return (
        <div className="all-posts">
            {allPosts}

        </div>

    );
}