import React from 'react';
import Card from '../card/card';
import './list.css'

// received products as props from product.jsx
const List = ({ products }) => (
    <div className="list-container">
        
    {/* mapping the products,sending products to card.jsx as props */}
    {products.map(p => (
      <Card
        key={p.id}
        title={p.title}
        price={p.price}
        category={p.category}
        description={p.description}
        image={p.image}
      />
    ))}
  </div>
);

export default List;
