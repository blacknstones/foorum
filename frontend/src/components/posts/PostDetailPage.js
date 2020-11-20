import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import PostsApi from "../../api/PostsApi";
import PostDetail from "./PostDetail";
import CommentForm from "../comments/CommentForm";
import CommentCard from "../comments/CommentCard";
import CommentsApi from "../../api/CommentsApi";
import Api from "../../api/Api";

export default function PostDetailPage() {
    const { postId } = useParams();


    const [post, setPost] = useState([]);
    const [comments, setComments] = useState();
    const [currentUser, setCurrentUser] = useState({});

    const createComment = (commentData) => {
        return CommentsApi.createComment(commentData)
            .then(response => setComments([response.data, ...comments]))

    };

    const deleteComment = (comment) => {
        return CommentsApi.deleteComment(comment.id)
            .then(() => setComments(comments.filter(c => c.id !== comment.id)));

    };

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
        Api.get("/user/me")
            .then(res => setCurrentUser(res.data));
    }, []);


    return (
        <div>
            <Link className="btn btn-dark mb-4" to={"/posts"}>Go back</Link>
            <PostDetail post={post} />

            <CommentForm onSubmit={createComment} post={post} currentUser={currentUser} />
            <div>
                {comments === undefined ?
                    <p>No comments to show. Create a comment now.</p> :
                    <div>
                        {
                            comments.map(comment => (<CommentCard key={comment.id} comment={comment} onDelete={deleteComment} currentUser={currentUser} />))
                        }

                    </div>}
            </div>
        </div>

    );
}