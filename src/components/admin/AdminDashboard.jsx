import React, { useState } from 'react';
import axios from 'axios';
import AddProductForm from '../products/AddPoductForm';
import "./AdminDashboard.css"


const AdminDashboard = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
        setProducts(data);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`);
        fetchProducts();
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <AddProductForm fetchProducts={fetchProducts} />
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        {product.name} - {product.price}
                        <button onClick={() => deleteProduct(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;