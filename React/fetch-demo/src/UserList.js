import React, { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]); //set the state of users array as blank

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // Fetch data from the API
      .then(response => response.json()) // Parse the JSON response
      .then(data => setUsers(data)) // Set the users state with the fetched data
      .catch(error => console.error('Error fetching users:', error));
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
