import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Import custom styles for our application
import "./App.css";

import Auth from "./services/Auth";
import Navbar from "./components/layout/Navbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from "./components/home/HomePage";
import PostsPage from "./components/posts/PostsPage";
import UserPage from "./components/user/UserPage";
import PostDetailPage from "./components/posts/PostDetailPage";

function App() {
    const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
    Auth.bindLoggedInStateSetter(setLoggedIn);

    const loggedInRouter = (
        <Router>
            <Navbar onLogout={() => Auth.logout()} />

            <div className="container mt-5">
                <Switch>
                    <Route exact path="/posts">
                        <PostsPage />
                    </Route>

                    <Route path="/user/me">
                        < UserPage />
                    </Route>

                    <Route exact path="/posts/:postId">
                        <PostDetailPage />
                    </Route>

                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </Router >
    );

    return (loggedIn ? loggedInRouter : <LoginPage />);
}

export default App;
