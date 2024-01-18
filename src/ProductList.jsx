import React from 'react';
import Product from './Product'; 

function ProductList({ products }) {
  return (
    <div className="ProductList">
      {products.map(product => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
}

export default ProductList;

