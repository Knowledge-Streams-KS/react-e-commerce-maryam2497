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
    axios.get(`http://localhost:4000/Product/getProductByCategory?category=${category}`)
      .then(response => {
        setProduct(response.data);
      console.log(response.data);
      })
      .catch((e)=>{
        console.log(e);
      })
      .finally();}

  else {
    axios.get('http://localhost:4000/Product/getProducts')
      .then((response => {
        setProduct(response.data);
      }))
      .catch(()=>{ })
      .finally();
}
},[])
const AscHandler = () => {
  let sortproduct = [...product];
  sortproduct = sortproduct.sort((val1, val2) => {
    return val1.price - val2.price;
  });
  setProduct(sortproduct);
};

const DescHandler = () => {
  let sortproduct = [...product];
  sortproduct = sortproduct.sort((val1, val2) => {
    return val2.price - val1.price;
  });
  setProduct(sortproduct);
};
const AtoZHandler = () => {
  let sortproduct = [...product];
  sortproduct = sortproduct.sort((val1, val2) => {
    if (val1.title > val2.title) return 1;
    if (val2.title > val1.title) return -1;
  });
  setProduct(sortproduct);
};

const ZtoAHandler = () => {
  let sortproduct = [...product];
  sortproduct = sortproduct.sort((val1, val2) => {
    if (val2.title > val1.title) return 1;
    if (val1.title > val2.title) return -1;
  });
  setProduct(sortproduct);
};
const handleChange = (event) => {
  switch (event.target.value) {
    case "lowToHigh":
      AscHandler();
      break;
    case "highToLow":
      DescHandler();
      break;
    case "AtoZ":
      AtoZHandler();
      break;
    case "ZtoA":
      ZtoAHandler();
      break;
    default:
      break;
  }
};

  return (<div className="product-page"> 
         <div className="sort-container">
   <select class="sort-dropdown" onChange={handleChange}>
      <option value="">Sort by</option>
      <option value="lowToHigh">Low to high price</option>
      <option value="highToLow">High to low price</option>
      <option value="AtoZ">Sort A-Z</option>
      <option value="ZtoA">Sort Z-A</option>
   </select>
   </div>

<div className="product-container">
    <List products={product} />
    
  </div>
  </div>
    
  );
};

export default Product;
