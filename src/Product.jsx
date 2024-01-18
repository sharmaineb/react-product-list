import React from 'react';
import './styles.css';

function Product({ id, name, description, price, category }) {
  return (
    <div className="Product">
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">${price}</p>
      <p className="category">Category: {category}</p>
    </div>
  );
}

export default Product;

