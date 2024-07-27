import React from 'react';
import { Routes, Route, Link, useResolvedPath, useMatch } from 'react-router-dom';
import AdminDashboard from '../components/AdminDashboard';
import AddProduct from '../components/AddProduct';
import ProductList from '../components/ProductList';
import ManageUsers from '../components/ManageUsers'; // You would need to create this component

const AdminPage = () => {
    // Use useResolvedPath to get the base path
    const resolvedPath = useResolvedPath('');
    const match = useMatch({ path: resolvedPath.pathname, end: false });
  
    // Get the base URL
    const baseUrl = match ? match.pathname : '';
  return (
    <div>
      <h1>Admin Panel</h1>
      <nav>
        <ul>
          <li>
            <Link to={`${baseUrl}/dashboard`}>Dashboard</Link>
          </li>
          <li>
            <Link to={`${baseUrl}/add-product`}>Add Product</Link>
          </li>
          <li>
            <Link to={`${baseUrl}/manage-users`}>Manage Users</Link>
          </li>
          <li>
            <Link to={`${baseUrl}/products`}>Product List</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path={`${baseUrl}/dashboard`} element={<AdminDashboard />} />
        <Route path={`${baseUrl}/add-product`} element={<AddProduct />} />
        <Route path={`${baseUrl}/manage-users`} element={<ManageUsers />} />
        <Route path={`${baseUrl}/products`} element={<ProductList />} />
        <Route path={baseUrl} element={<AdminDashboard />} />
      </Routes>
      
    </div>
  );
};

export default AdminPage;