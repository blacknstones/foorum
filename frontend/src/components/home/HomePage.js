import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Homepage</h4>
                <p>This is foorum for you to post</p>
                <Link to="/posts">Post page</Link>
               
            </div>
        </div>
    );
}

export default HomePage;