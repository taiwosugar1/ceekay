import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./ProductList.css"

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/products`);
            setProducts(data);
        }

        fetchProducts();
    }, []);

    return (
        <div className='product-list'>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product._id}>
                        <Link to={`/product/${product._id}`}>
                            {product.name} - ${product.price}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;