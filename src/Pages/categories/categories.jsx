import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Product from '../product/product';
const Categories = () => {
const [categories, setCategories] = useState([]);
const { category } = useParams();

useEffect(() => {
axios.get('https://fakestoreapi.com/products/categories')
.then(response => {
setCategories(response.data);
console.log(response.data);
});
}, []);

return (
  <div>
    <br/>
    <br/>
    {categories.map((category,index) => (
     
      <Link key={index} to={`/product/${category}`} >
        {category}<br/>
      </Link >
    ))}
  </div>
);
};
export default Categories;