import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './productDetails.css';
import { addToCart } from '../../redux/cart/action';
const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
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

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div className='product-details-container' >
      <h1 >{product.title}</h1>
      <p className='productDetailDescription'>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <p className='productDetailPrice'>Price: ${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>)
}
export default ProductDetails;
