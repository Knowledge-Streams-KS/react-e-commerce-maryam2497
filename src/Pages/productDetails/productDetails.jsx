import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './productDetails.css';
const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally();
  }, [id]);

  return (
    <div className='product-details-container' >
      <h1 >{product.title}</h1>
      <p className='productDetailDescription'>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <p className='productDetailPrice'>Price: ${product.price}</p>
    </div>)
}
export default ProductDetails;
