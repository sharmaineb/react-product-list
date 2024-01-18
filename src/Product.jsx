import React from 'react';
import './styles.css';

function Product({ name, description, price, category, units, rating }) {
  return (
    <div className="Product">
      <h3>{name}</h3>
      <p>{description}</p>
      <p className="price">Price: ${price}</p>
      <p className="category">Category: {category}</p>
      <p className="units">Units: {units}</p>
      <p className="rating">Rating: {rating}</p>
    </div>
  );
}

export default Product;



