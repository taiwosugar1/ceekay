import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../../api/api';
import './ProductDetail.css'; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductData = async () => {
      const response = await getProduct(id);
      setProduct(response);
    };
    fetchProductData();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className='product-detail'>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <img src={product.imageUrl} alt={product.name} />
    </div>
  );
};

export default ProductDetail;