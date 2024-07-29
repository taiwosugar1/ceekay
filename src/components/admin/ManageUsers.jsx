import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../../api/api';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const token = localStorage.getItem('authToken'); // Retrieve token
      try {
        const data = await fetchUsers(token); // Pass token to API function
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
        alert('Error fetching users');
      }
    };
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('authToken'); // Retrieve token
    try {
      await deleteUser(id, token); // Pass token to API function
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      console.error('Error deleting user:', err);
      alert('Error deleting user');
    }
  };

  return (
    <div className='manage-users'>
      <h1>Manage Users</h1>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.name} - {user.email}
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageUsers;
