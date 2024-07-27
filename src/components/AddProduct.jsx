import React, { useState } from 'react';
import { createProduct } from '../api/api';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(formData);
      alert('Product added successfully');
    } catch (err) {
      alert('Error adding product');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
      <input type="text" name="imageUrl" placeholder="Image URL" onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;