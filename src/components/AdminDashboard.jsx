import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link to="/admin/add-product">Add Product</Link>
      <Link to="/admin/manage-users">Manage Users</Link>
    </div>
  );
};

export default AdminDashboard;