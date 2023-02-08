import React, { useState } from 'react';
import Card from '../card/card';
import './list.css'

// received products as props from product.jsx
const List = ({ products }) => {
  const [txtSearch, setTxtSearch] = useState('');

  const handleSearch = (event) => {
    // whatever value will be in txtSearch will be converted to lower case for it to work for both lower and uper case
    setTxtSearch(event.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(txtSearch);
  });

  return (
    <div className="list-container">
      <div className="search-container">
        {/* seach bar text will be store in txtSearch and handleSearch will be called every time txt change */}
        <input type="text" value={txtSearch} onChange={handleSearch} />
        {/* <button>Search</button> */}
      </div>
      {/* mapping the products,sending products to card.jsx as props */}
      {/* create a new array of filteredProducts that only includes products whose title includes the lower case  */}
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
