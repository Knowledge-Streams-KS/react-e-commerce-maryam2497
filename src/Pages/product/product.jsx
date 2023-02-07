import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '../../Components/list/list';

import './product.css'
const Product = () => {
  //useState will update product using setProduct
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // fetching data from fakeApi site using axious
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        // setting the data got as response as product 
        setProduct(response.data);
      });
  }, []);

  return (
    <div className="product-container">
      {/* pass products to list.jsx */}
    <List products={product} />
  </div>
  );
};

export default Product;
