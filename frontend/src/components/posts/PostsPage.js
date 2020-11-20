import React, { useState, useEffect } from "react";
import PostForm from "./PostForm";
import PostsApi from "../../api/PostsApi";
import PostsList from "./PostsList";
import Api from "../../api/Api";

export default function PostsPage() {

    // Due to the time limit we didn't manage to pass user info as a global state. 
    // This code is dulicated in several pages as a workaround.
    // For further developement it will be refactored as UserApi.
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        Api.get("/user/me")
            .then(res => setCurrentUser(res.data));
    }, []);

    const [posts, setPosts] = useState([]);
    const [isCreating, setIsCreating] = useState(false);
    

    const onCreatePostClick = () => {
        setIsCreating(true);
    };


    const createPost = (postData) => {
        return PostsApi.createPost(postData)
        .then(response => setPosts([response.data, ...posts]))
        .then(setIsCreating(false)); 
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
            {isCreating ? 
            <PostForm onSubmit = {createPost} currentUser={currentUser} /> : 
            <button className="btn btn-dark mb-4" onClick={onCreatePostClick}>Create post</button>}
    
            <PostsList posts={posts} currentUser={currentUser}
            onDelete={deletePost}/>
        </div>
  
    );
}