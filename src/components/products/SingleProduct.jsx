import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./SingleProduct.css"

const SingleProduct = ({ match }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data);
        };

        fetchProduct();
    }, [match.params.id]);

    return (
        <div className='single-product'>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>In Stock: {product.countInStock}</p>
        </div>
    );
};

export default SingleProduct;