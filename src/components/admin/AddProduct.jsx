import React, { useState } from 'react';
import { createProduct } from '../../api/api';
import './AddProduct.css'; // Import the CSS file

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: null, // Change from imageUrl to image
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = new FormData();
    productData.append('name', formData.name);
    productData.append('description', formData.description);
    productData.append('price', formData.price);
    productData.append('image', formData.image);

    try {
      await createProduct(productData);
      alert('Product added successfully');
    } catch (err) {
      alert('Error adding product');
    }
  };

  return (
    <div className="add-product-form">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <textarea name="description" placeholder="Description" onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price" onChange={handleChange} required />
        <input type="file" name="image" onChange={handleFileChange} accept="image/jpeg, image/png, image/jpg" required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
