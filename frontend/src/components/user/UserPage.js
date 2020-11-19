import React, { useState, useEffect} from "react";
import Api from "../../api/Api";

function UserPage() {

    // Getting user info from Api.
    // Due to the time limit I didn't manage to pass the info as global state. 
    // This code is pulicated in several pages as a workaround.
    const [currentUser, setCurrentUser] = useState({});
    useEffect(() => {
        Api.get("/user/me")
            .then(res => setCurrentUser(res.data));
    }, []);

    return (
        <div>
            <h4>Welcome, {currentUser.name}</h4>
    <p>Your email is: {currentUser.email}</p>

        </div>
    );
}

export default UserPage;