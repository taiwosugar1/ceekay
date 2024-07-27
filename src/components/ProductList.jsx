import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      const response = await getProducts();
      setProducts(response);
    };
    fetchProductList();
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map(product => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img src={product.imageUrl} alt={product.name} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;