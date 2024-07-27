import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../api/api';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user._id !== id));
    } catch (err) {
      alert('Error deleting user');
    }
  };

  return (
    <div>
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