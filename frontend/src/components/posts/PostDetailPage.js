import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PostsApi from "../../api/PostsApi";
import PostDetail from "./PostDetail";
import CommentsApi from "../../api/CommentsApi";

export default function PostDetailPage() {
    const { postId } = useParams();

    
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState();

   const getPost = () => {
        PostsApi.getPostById(postId)
        .then(response => setPost(response.data))
    }; 
    const getComments = () => {
        CommentsApi.getCommentByPostId(postId)
        .then(response => setComments(response.data))
    };



    useEffect(() => {
        getPost();
        getComments();  
    }, []);

    

    

    

    return (
        <div>
            <Link to={"/posts"}>Go back</Link>
            <p>this is post detail</p>
            <PostDetail post={post}/>
            <button>Comment</button>

        </div>
    );
}