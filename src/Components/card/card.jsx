import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

const Card = ({ id,title, price, category, description, image }) => (
    <div className="card-container">
   <Link to={`/productDetails/${id}`} > <h3  className="card-title">{title}</h3></Link>
    <p className="card-price" >Price: ${price}</p>
    <p className="card-category">Category: {category}</p>
    <p className="card-description">{description}</p>
    <img className="card-image" src={image} alt={title} />
  </div>
);

export default Card;
