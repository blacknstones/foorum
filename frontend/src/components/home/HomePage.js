import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    
    return (
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Home</h4>
                <p>Welcome to Foorum!  </p>
                <p>The world's next largest online forum for developers. </p>
                <br />
                <h6>How to use Foorum:</h6>
                <p>Browse posts by other developers and publish your own posts.</p>
                <Link to="/posts" >Post page</Link>
                <Link to="/user/me" >My page</Link>
            </div>
        </div>
    );
}

export default HomePage;