import React, { useState } from 'react';
import Card from '../card/card';
import './list.css'

// received products as props from product.jsx
const List = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm);
  });

  return (
    <div className="list-container">
      <div className="search-container">
        <input type="text" value={searchTerm} onChange={handleSearch} />
        <button>Search</button>
      </div>
      {/* mapping the products,sending products to card.jsx as props */}
      {filteredProducts.map(p => (
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
};

export default List;
