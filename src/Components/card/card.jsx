import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

const Card = ({ id,title, price, category, description, image }) => (
    <div className="card-container">
   <Link to={`/productDetails/${id}`}> <h3 >{title}</h3></Link>
    <p>Price: ${price}</p>
    <p >Category: {category}</p>
    <p >{description}</p>
    <img  src={image} alt={title} />
  </div>
);

export default Card;
