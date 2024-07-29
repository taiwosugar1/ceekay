import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import AdminDashboard from '../../components/admin/AdminDashboard';
import AddProduct from '../../components/admin/AddProduct';
import ProductList from '../../components/products/ProductList';
import ManageUsers from '../../components/admin/ManageUsers'; 
import "./AdminPage.css";

const AdminPage = () => {
  return (
    <div className='admin-page'>
      <h1>Admin Panel</h1>
      <nav>
        <ul>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="add-product">Add Product</Link>
          </li>
          <li>
            <Link to="manage-users">Manage Users</Link>
          </li>
          <li>
            <Link to="productlist">Product List</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="add-product" element={<AddProduct />} />
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="/" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default AdminPage;
