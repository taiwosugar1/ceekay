import React from 'react';
import { Route, Routes, useParams, useResolvedPath } from 'react-router-dom';
import ProductList from '../components/ProductList';
import ProductDetail from '../components/ProductDetail';

const ProductPage = () => {
  // Get the resolved path
  const { pathname } = useResolvedPath();
  // Get the id parameter from the URL
  const { id } = useParams();

  return (
    <div>
      <h1>Products</h1>
      <Routes>
        <Route path={pathname} element={<ProductList />} />
        <Route path={`${pathname}/:id`} element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default ProductPage;