import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import Product from '../product/product';
import './categories.css';

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
    <div className="categories-container">
      {categories.map((category, index) => (
        <Link key={index} to={`/product/${category}`} >
         <button className="categories-btn">{category}</button>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
