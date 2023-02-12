import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from '../../Components/list/list';
import { Link } from 'react-router-dom';
import './product.css'
import { useParams } from 'react-router-dom';

const Product = () => {
  const [product, setProduct] = useState([]);
  const {category}=  useParams();
 
  useEffect(() =>{
  if(category){ 
    axios.get(`https://fakestoreapi.com/products/category/${category}`)
      .then(response => {
        setProduct(response.data);
      console.log(response.data);
      })
      .catch((e)=>{
        console.log(e);
      })
      .finally();}

  else {
    axios.get('https://fakestoreapi.com/products')
      .then((response => {
        setProduct(response.data);
      }))
      .catch(()=>{ })
      .finally();
}
},[])



  return (<div> 
   
  
<div className="product-container">
    <List products={product} />
    
  </div>
  </div>
    
  );
};

export default Product;
