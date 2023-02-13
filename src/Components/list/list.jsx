import React, { useState } from 'react';
import Card from '../card/card';
import './list.css'

const List = ({ products }) => {
  const [txtSearch, setTxtSearch] = useState('');

  const handleSearch = (event) => {
    setTxtSearch(event.target.value.toLowerCase());
  };
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(txtSearch);
  });

  return (
    <div className="list-container">
      <div className='search-container'>
        <input type="text" placeholder='Search....' value={txtSearch} onChange={handleSearch} />
        <button>Search</button>
      </div>
      {filteredProducts.map(p => (
        <Card
          id={p.id}
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
