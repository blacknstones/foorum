import React, {useState, useEffect} from "react";
import PostForm from "./PostForm";
import PostsApi from "../../api/PostsApi";
import PostsList from "./PostsList";

export default function PostsPage() {
    const [posts, setPosts] = useState([]);

    const createPost = (postData) => {
        return PostsApi.createPost(postData)
        .then(response => setPosts([response.data, ...posts]));
        
    };

    const getAll = () => {
        PostsApi.getAllPosts()
        .then(response => setPosts(response.data.sort((a, b) => b.id - a.id)));
    };

    const deletePost = (post) => {
        return PostsApi.deletePost(post.id)
        .then(() => setPosts(posts.filter(p => p.id !== post.id)));
    }


    useEffect(()=>{
        getAll()
    },[]);


    return (
        <div>
            <PostForm onSubmit = {createPost} />
            <PostsList posts={posts} 
            onDelete={deletePost}/>
        </div>
  
    );
}