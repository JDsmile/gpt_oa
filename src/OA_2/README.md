## You are building a simple user profile display app. The app has the following requirements:

1. Initial View: Show a "No Profile Selected" message when no profile is selected.
2. View Profile: When a user clicks on a name from the list, display the selected user's profile.
3. Hide Profile: Add a "Hide Profile" button that hides the profile details and shows the initial "No Profile Selected" message.

```
import React, { useState } from "react";

const UserProfileApp = () => {
  const users = [
    { id: 1, name: "Alice", age: 25, bio: "A software developer from NY." },
    { id: 2, name: "Bob", age: 30, bio: "A graphic designer from LA." },
    { id: 3, name: "Charlie", age: 28, bio: "A product manager from SF." },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const handleHideProfile = () => {
    setSelectedUser(null);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>User Profiles</h1>

      {/* User List */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => setSelectedUser(user)}>{user.name}</button>
          </li>
        ))}
      </ul>

      {/* Profile Section */}
      <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "10px" }}>
        {selectedUser ? (
          <div>
            <h2>{selectedUser.name}'s Profile</h2>
            <p><strong>Age:</strong> {selectedUser.age}</p>
            <p><strong>Bio:</strong> {selectedUser.bio}</p>
            <button onClick={handleHideProfile}>Hide Profile</button>
          </div>
        ) : (
          <p>No Profile Selected</p>
        )}
      </div>
    </div>
  );
};

export default UserProfileApp;

```
