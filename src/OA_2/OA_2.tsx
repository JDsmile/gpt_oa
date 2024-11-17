import { useState } from "react";

interface User {
  id: number;
  name: string;
  age: number;
  bio: string;
}
const OA_2 = () => {
  const users = [
    { id: 1, name: "Alice", age: 25, bio: "A software developer from NY." },
    { id: 2, name: "Bob", age: 30, bio: "A graphic designer from LA." },
    { id: 3, name: "Charlie", age: 28, bio: "A product manager from SF." },
  ];

  const [selectedUser, setSelectedUser] = useState<User | null>(null);

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
      <div style={{ marginTop: "20px" }}>
        {/* Render the selected user's profile */}
        <span>
          {selectedUser
            ? `${selectedUser.name}, ${selectedUser.age}, ${selectedUser.bio}`
            : "No Profile Selected"}
        </span>
        {/* Add functionality to hide the profile */}
        <button onClick={() => setSelectedUser(null)}>Hide</button>
      </div>
    </div>
  );
};

export default OA_2;
