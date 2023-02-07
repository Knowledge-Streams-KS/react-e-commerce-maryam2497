import React from 'react';
// import './card.css'

const Card = ({ title, price, category, description, image }) => (
    <div className="card-container">
    <h3 className="card-title">{title}</h3>
    <p className="card-price">Price: ${price}</p>
    <p className="card-category">Category: {category}</p>
    <p className="card-description">{description}</p>
    <img className="card-image" src={image} alt={title} />
  </div>
);

export default Card;
