import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <Link to="/add-product">Add Product</Link>
      <Link to="/manage-users">Manage Users</Link>
    </div>
  );
};

export default AdminDashboard;