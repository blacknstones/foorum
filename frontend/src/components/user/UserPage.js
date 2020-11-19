import React from "react";

function UserPage({currentUser}) {
    return (
        <div>
            <h4>Welcome, {currentUser.name}</h4>
    <p>Your email is: {currentUser.email}</p>

        </div>
    );
}

export default UserPage;