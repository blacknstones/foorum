// React core
import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard() {
    // Destruct data
    // const {
    //     post_id,
    //     title,
    //     body,
    //     userName,
    //     email
    // } = data;

    return (
        <article className="post-card">
            
                <div>
                    <h4>Email</h4>
                    <p>post body</p>
                    <button>comment button</button>
                </div>
        
        </article>
    );

}