import React, { useState } from 'react';
import axios from 'axios';
import "./AddProductForm.css"

const AddProductForm = ({ fetchProducts }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [countInStock, setCountInStock] = useState('');

    const submitHandler = async (e) => {
        e.preventDefault();
        
        if (!name || !description || !price || !countInStock) {
            console.error('All fields are required');
            return;
        }
    
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/products`, {
                name,
                description,
                price: parseFloat(price), // Ensure price is a number
                countInStock: parseInt(countInStock) // Ensure countInStock is a number
            });
            fetchProducts();
        } catch (error) {
            console.error("Error adding product:", error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={submitHandler} className='add-product-form'>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Count in Stock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
            />
            <button type="submit">Add Product</button>
        </form>
    );
};

export default AddProductForm;