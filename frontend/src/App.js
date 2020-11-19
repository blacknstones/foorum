import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// Import custom styles for our application
import './App.css';

import Auth from './services/Auth';
import Navbar from "./components/layout/Navbar";

// Import pages
import LoginPage from "./components/auth/LoginPage";
import HomePage from './components/home/HomePage';
import PostsPage from "./components/posts/PostsPage";
import UserPage from './components/user/UserPage';
import Api from './api/Api';

function App() {
  const [loggedIn, setLoggedIn] = useState(Auth.isLoggedIn());
  const [currentUser, serCurrentUser] = useState({});
  Auth.bindLoggedInStateSetter(setLoggedIn);

  useEffect(() => {
      Api.get("/user/me")
      .then(res => serCurrentUser(res.data));
  }, []);
  
  const loggedInRouter = (
            <Router>
                <Navbar onLogout={() => Auth.logout()} />

                <div className="container mt-5">
                    <Switch>
                        <Route path="/posts">
                            <PostsPage currentUser={currentUser}/>
                        </Route>

                        <Route path="/user/me">
                            < UserPage currentUser={currentUser}/>
                        </Route>

                        <Route path="/">
                          <HomePage currentUser={currentUser}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
  );

  return (loggedIn ? loggedInRouter : <LoginPage/>);
}

export default App;
